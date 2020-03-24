pipeline { 
    agent { docker { image 'node:7-alpine' } }
    stages {
        stage('build') {
             environment {
                HOME = '.'
            }
            steps {
                sh 'npm --version'
            }
        }
    }
}