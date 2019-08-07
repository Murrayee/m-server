pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'sudo docker stop m-server || true  &&  sudo docker rm m-server || true && sudo docker build  -t node' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'sudo docker run -d --privileged=true --name  m-server -p 9090:9090 --link redis --link mongo' 
            }
        }
    }
}