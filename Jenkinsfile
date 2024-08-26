pipeline {
  agent any
  tools {
    jdk "jdk17  "
    nodejs 'node16'
  }
  environment {
    SCANNER_HOME = tool 'sonar-scanner'
    APP_NAME = "MEAN-Stack-App"
    RELEASE = "1.0.0"
    DOCKER_USER = "Olakanmid"
    DOCKER_PASS = credentials('dockerhub') // Assuming 'dockerhub' is the ID of the Jenkins credential
    IMAGE_NAME = "${DOCKER_USER}/${APP_NAME}"
    IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
  }
  stages {
    stage('Clean Workspace') {
      steps {
        cleanWs()
      }
    }
    stage('Checkout from Git') {
      steps {
        git branch: 'main', url: 'https://github.com/Olakanmid/MEAN-Stack-Auth-Project.git'
      }
    }
    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQube-Server') {
          sh '''
          $SCANNER_HOME/bin/sonar-scanner \
            -Dsonar.projectName=MEAN-STACK-CI \
            -Dsonar.projectkey=MEAN-STACK-CI
          '''
        }
      }
    }
    stage('Quality Gate') {
      steps {
        script {
          def qualityGate = waitForQualityGate()
          if (qualityGate.status != 'OK') {
            error "Pipeline aborted due to quality gate failure: ${qualityGate.status}"
          }
        }
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('TRIVY FS Scan') {
      steps {
        sh 'trivy fs . > trivyfs.txt'
        archiveArtifacts artifacts: 'trivyfs.txt', allowEmptyArchive: true
      }
    }
  }
}
