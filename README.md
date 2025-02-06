# Deploying a Node.js Application on Kubernetes (Minikube)


## Overview

This project demonstrates how to deploy a simple Node.js application on Kubernetes using Minikube. We will containerize the app using Docker, deploy it using Kubernetes, and expose it using a LoadBalancer service.

### Technologies

- **Node.js**
- **Kubernetes (Minikube)**
- **Docker**

## Steps to Deploy

### Step 1: Install Minikube and kubectl

1. **Install Minikube**:  
   Follow the instructions to install Minikube based on your operating system:  
   [Minikube Installation](https://minikube.sigs.k8s.io/docs/).

2. **Install kubectl**:  
   kubectl is the Kubernetes command-line tool. You can install it by following this guide:  
   [kubectl Installation](https://kubernetes.io/docs/tasks/tools/install-kubectl/).

3. Minikube can run a Kubernetes cluster either in a VM or locally via Docker. This guide demonstrates the Docker method.

  sudo apt install -y docker.io

  Start and enable Docker:

  sudo systemctl enable --now docker

  Add current user to the Docker group (to use Docker without root):

  sudo usermod -aG docker $USER && newgrp docker

4. **Start Minikube**:
   After installing Minikube, start it with the following command:
   ```bash
   
minikube start --driver=docker --vm=true

This command will start a single-node Kubernetes cluster inside a Docker container.

Check the cluster status with:

minikube status

#  Build Docker Image for Node.js App:

Build your Docker image using the command below:

docker build -t archanasingh05/nodejs-app .

[create docker image then you push your image on DockerHub using this command

docker login

docker push archanasingh05/nodejs]

#  Create Kubernetes Pod
Create a pod YAML file deployment.yaml for your Node.js application. Replace <your-docker-image-name> with your Docker image name.

kubectl apply -f pod.yaml

# Verify Pods
Kubectl get pods

# Create Kubernetes Deployment
Create a deployment YAML file deployment.yaml for your Node.js application. Replace <your-docker-image-name> with your Docker image name.

Deploy the app using:

kubectl apply -f deployment.yaml

# Verify Deployment
kubectl get deployments

#  Create Kubernetes Service
Create a service YAML file service.yaml to expose your app.

kubectl apply -f service.yaml

# Accessing the Deployment
 Check the status of your pods and services:

kubectl get pods -n noejs

kubectl get svc -n nodejs

Forward the service port to access it locally:

kubectl port-forward service/nodejs -n webapp 5000:5000 --address=0.0.0.0 &

Open your browser and visit:

http://<your-server-ip>:5000




