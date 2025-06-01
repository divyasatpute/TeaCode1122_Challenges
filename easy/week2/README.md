# 🚀 TeaCode1122 Weekly DevOps Tasks
# THIS IS WEEK-2

Welcome to the **TeaCode1122 Community Weekly Task Hub!**  
Each week we tackle hands-on DevOps challenges that help you grow from beginner to advanced levels.  
This week’s focus: **Docker Mastery 🐳**

---

## 🟢 Easy Task – Dockerize a Simple Flask App

### ✅ Goal:
Learn how to create a Docker image and run a containerized web app.

### 📝 Instructions:
1. Create a file named `app.py` with a simple Flask app:
    ```python
    from flask import Flask
    app = Flask(__name__)

    @app.route('/')
    def hello():
        return "Hello, TeaCode1122!"
    ```

2. Create a `Dockerfile`:
    ```dockerfile
    FROM python:3.8-slim
    WORKDIR /app
    COPY . .
    RUN pip install flask
    CMD ["python", "app.py"]
    ```

3. Build & Run:
    ```bash
    docker build -t teacode-flask .
    docker run -p 5000:5000 teacode-flask
    ```

---
