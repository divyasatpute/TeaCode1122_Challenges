# Update package list
'''
sudo apt update

# Install JDK 17
sudo apt install openjdk-17-jdk -y

# Install Jenkins
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins -y

sudo apt install docker.io -y

sudo usermod -aG docker ubuntu
sudo suermod -aG docker jenkins
newgrp docker
sudo systemctl restart jenkins

sudo snap install kubectl --classic

# For AMD64 / x86_64
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.29.0/kind-linux-amd64
# For ARM64
[ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.29.0/kind-linux-arm64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind -y

kind create cluster --name=kind-demo-cluster


sudo snap install helm -y

git clone https://github.com/sumit-patil-24/Valentine-Day-DevOps-Project.git
cd Valentine-Day-DevOps-Project

helm install release ./helm_chart
'''
---

seervice account

apiVersion: v1
kind: ServiceAccount
metadata:
  name: jenkins
  namespace: default

create role

apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-role
  namespace: default
rules:
- apiGroups: ["*", ""]
  resources: ["*"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]

create RoleBinding

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

create secret

apiVersion: v1
kind: Secret
type: kubernetes.io/service-account-token
metadata:
  name: mysecretname
  annotations:
    kubernetes.io/service-account.name: jenkins


# Get the token from the secret
kubectl describe secret mysecretname

you'll get token in result
Copy the token value.
Go to your Jenkins instance and navigate to Credentials > System > Global credentials.
Click Add Credentials and select Secret text.
Paste the token value into the Secret field.
Give the credential a name and description, and click OK.


create jenkins pipeline and build it after providing correct credentials
