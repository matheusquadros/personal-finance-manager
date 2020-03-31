pipeline {
  agent {
      docker {
          image 'node:12-alpine' 
          args '-p 3000:3000' 
      }
  }
  stages {
    stage('Startup') { 
      steps {
          sh 'node --version'
          sh 'yarn install' 
      }
    }
    stage('Tests') { 
      steps {
          sh 'echo tests'
      }
    }
    stage('Build') { 
      steps {
          sh 'npm run build'
      }
    }
  }
}