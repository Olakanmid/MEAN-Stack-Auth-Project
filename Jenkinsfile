pipeline {
  agent any
  tools {
    jdk 'jdk17'
    nodejs 'node16'
  }
  environment {
    
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
      git branch: 'main', url: ''
    }
  }
}
