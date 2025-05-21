# Setup Jenkins, Docker, Kubernetes, and Helm

This guide provides step-by-step instructions to set up Jenkins, Docker, Kubernetes (using kind), and Helm for a CI/CD pipeline.

## Prerequisites
- Ubuntu system
- sudo privileges
- Internet access

## Step 1: Install Dependencies

### Update package list and install JDK 17
```shell
sudo apt update
sudo apt install openjdk-17-jdk -y
```

### Install Jenkins
```shell
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins -y
```

### Install Docker and configure permissions
```shell
sudo apt install docker.io -y
sudo usermod -aG docker ubuntu
sudo usermod -aG docker jenkins
newgrp docker
sudo systemctl restart jenkins
```
