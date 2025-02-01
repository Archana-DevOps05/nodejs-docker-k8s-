pipeline {
    agent any

    stages {
        stage("Code") {
            steps {
                git url: "https://github.com/Archana-DevOps05/ci-cd-pipeline-nodejs.git", branch: "master"
            }
        }
        stage("Build") {
            steps {
                sh "docker build -t node-app ."
            }
        }
        stage("Test") {
            steps {
                echo "test wali image"
            }
        }
        stage("Push to DockerHub") {
            steps {
              withCredentials([usernamePassword(credentialsId: 'dockerHubCreds', usernameVariable: 'dockerHubUser', passwordVariable: 'dockerHubPass')]) {
              sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
              sh "docker image tag node-app:latest ${env.dockerHubUser}/node-app:latest"
              sh "docker push ${env.dockerHubUser}/node-app:latest"
        }
    }
}

       
        stage("Deploy") {
            steps {
                sh "docker run -it -d --name mycontainer1 -p 5000:5000 --network mynetwork -v myvolume:/var node-app"
            }
        }
    }
}
