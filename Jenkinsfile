pipeline {
  agent any
  tools {
    jdk 'jdk17'
    nodejs 'node16'
  }
  environment {
    SCANNER_HOME = tool 'sonar-scanner'
    APP_NAME = "MEAN-Stack-App"
    RELEASE = "1.0.0"
    DOCKER_USER = "Olakanmid"
    DOCKER_PASS = 'dockerhub'
    IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
    IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
    JENKINS_API_TOKEN = credentials("JENKINS_API_TOKEN")
  }
  stages {
    stage('clean workspace') {
      steps {
        cleanWs()
      }
    }
  }
  stage ('checkout from git') {
    steps {
      git branch: 'main', url: 'https://github.com/Olakanmid/MEAN-Stack-Auth-Project.git'
    }
  }
  stage ('SonarQube analysis') {
    steps {
      withSonarQubeEnv('SonarQube-Server') {
        sh '''$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=MEAN-STACK-CI \
        -Dsonar.projectkey=MEAN-STACK-CI'''
      }
    }
  }
  stage ('Quality Gate') {
    steps {
      script {
        waitForQualityGate abortPipeline: false, credentialsId: 'SonarQube-Token'
      }
    }
  }
  stage ('install dependencies') {
    steps {
      sh "npm install"
    }
  }
  stage ('TRIVY FS SCAN') {
    steps {
      sh "trivy fs . > trivyfs.txt"
    }
  }
}
