Node.js CI/CD Pipeline with Jenkins, Docker, and GitHub Webhooks
This project demonstrates a CI/CD pipeline using Jenkins, Docker, and GitHub Webhooks to automate the process of building, testing, and deploying a simple Node.js application to a cloud environment (e.g., AWS EC2).

Project Overview
This project is a simple Node.js web application that displays "Hello, CICD with Jenkins and Docker!" when accessed. The purpose of this repository is to demonstrate an automated CI/CD pipeline using Jenkins and Docker to:

Build and test the app.
Create a Docker image.
Push the Docker image to Docker Hub.
Deploy the app to a cloud instance (AWS EC2 or GCP).
The pipeline is triggered by a GitHub webhook, which activates the build process whenever changes are pushed to the repository.

Technologies Used
Node.js: Backend application framework.
Docker: Containerization platform to package the app.
Jenkins: Automation server for CI/CD pipeline.
GitHub: Version control and source code management.
AWS EC2/GCP: Cloud deployment platforms.
GitHub Webhook: To trigger Jenkins builds on code push events.
Getting Started
Follow these steps to set up the project locally and configure the CI/CD pipeline.

1. Create the Project Directory
bash
Copy
Edit
mkdir jenkins-nodejs-project
cd jenkins-nodejs-project
