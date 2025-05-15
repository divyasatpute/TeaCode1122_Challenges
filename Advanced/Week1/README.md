# Advanced Week 1 Challenge: Jenkins + Helm CI/CD Pipeline

## 🎯 Challenge Overview

Your task is to build a fully automated CI/CD pipeline using **Jenkins** and **Helm** to deploy a simple application to a Kubernetes cluster.

---

## 📝 Challenge Requirements

- Create a **Jenkinsfile** that performs these steps:
  - Checks out the application code from GitHub
  - Builds a Docker image of the application
  - Pushes the Docker image to DockerHub (or any container registry)
  - Deploys or upgrades the application in Kubernetes using a **Helm chart**

- Build a **Helm chart** for the application including deployment and service manifests.

- The pipeline must be repeatable, allowing seamless updates on every run.

---

## 📂 Submission Structure

In your submission folder (`advanced/week-1/submissions/@yourusername/`), please include:

- `Jenkinsfile` — your Jenkins pipeline script  
- `helm/` — Helm chart directory with all necessary templates  
- `README.md` — explaining how to run the pipeline and deploy the app  
- (Optional) Kubernetes manifests if used directly  

---

## 💡 Bonus (Optional)

- Use Jenkins credentials securely for DockerHub login  
- Include linting or testing stages in your pipeline  
- Use Helm values for dynamic deployment customization  

---

## 🔗 Useful Links

- [Jenkins Pipeline Documentation](https://www.jenkins.io/doc/book/pipeline/)  
- [Helm Official Docs](https://helm.sh/docs/)  
- [DockerHub](https://hub.docker.com/)  
- [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

---

## 🎉 Good luck!  
Show your skills and automate that deployment!

