pipeline { 
    agent any
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