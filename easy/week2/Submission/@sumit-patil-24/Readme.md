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
    CMD ["python", "app.py", "--host=0.0.0.0", "--port=5000"]
    ```

3. Build & Run:
    ```bash
    docker build -t teacode-flask .
    docker run -p 5000:5000 teacode-flask
    ```

###output

![App Screenshot](https://github.com/sumit-patil-24/TeaCode1122_Challenges/blob/main/Screenshot 2025-06-01 101638.png?raw=true)