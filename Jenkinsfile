pipeline {
  agent any
  tools {
    jdk 'jdk17'
    nodejs 'node16'
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
