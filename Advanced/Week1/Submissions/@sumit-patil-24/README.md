# Setup Jenkins, Docker, Kubernetes, and Helm

This guide provides step-by-step instructions to set up Jenkins, Docker, Kubernetes (using kind), and Helm for a CI/CD pipeline.

## Prerequisites
- Ubuntu system
- sudo privileges
- Internet access

## Step 1: Install Dependencies

### Update package list and install JDK 17
bash
sudo apt update
sudo apt install openjdk-17-jdk -y


### Install Jenkins
bash
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins -y


### Install Docker and configure permissions
bash
sudo apt install docker.io -y
sudo usermod -aG docker ubuntu
sudo usermod -aG docker jenkins
newgrp docker
sudo systemctl restart jenkins


### Install kubectl
bash
sudo snap install kubectl --classic


### Install kind (Kubernetes in Docker)
bash
if [ $(uname -m) = x86_64 ]; then
  curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.29.0/kind-linux-amd64
elif [ $(uname -m) = aarch64 ]; then
  curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.29.0/kind-linux-arm64
fi
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
kind create cluster --name=kind-demo-cluster


### Install Helm
bash
sudo snap install helm -y


## Step 2: Clone Repository and Install Helm Chart
bash
git clone https://github.com/sumit-patil-24/Valentine-Day-DevOps-Project.git
cd Valentine-Day-DevOps-Project
helm install release ./helm_chart


## Step 3: Create Kubernetes Resources

Create a file named `k8s-resources.yaml` with the following content:

yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: jenkins
  namespace: default

---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-role
  namespace: default
rules:
  - apiGroups: ["*", ""]
    resources: ["*"]
    verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: app-rolebinding
  namespace: default
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: app-role
subjects:
  - namespace: default
    kind: ServiceAccount
    name: jenkins

---
apiVersion: v1
kind: Secret
type: kubernetes.io/service-account-token
metadata:
  name: mysecretname
  annotations:
    kubernetes.io/service-account.name: jenkins


Apply the configuration:
bash
kubectl apply -f k8s-resources.yaml


## Step 4: Get Token and Create Jenkins Credential

1. Get the token:
bash
kubectl describe secret mysecretname


2. Copy the token value.

3. In Jenkins:
   - Navigate to *Credentials* > *System* > *Global credentials*
   - Click *Add Credentials*
   - Select *Secret text*
   - Paste the token value into the *Secret* field
   - Add a name and description
   - Click *OK*

## Step 5: Create Jenkins Pipeline and Build

1. Create a new Jenkins pipeline job
2. Configure the pipeline to use the Jenkinsfile from your repository
3. Build the pipeline

## Conclusion
You now have a fully configured Jenkins pipeline integrated with Kubernetes and Helm for your DevOps workflow.
