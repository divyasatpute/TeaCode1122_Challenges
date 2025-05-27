## 🟡 Medium Task – Docker Networking: Two Containers Talk

### ✅ Goal:
Understand Docker networking using a custom bridge.

### 📝 Instructions:
1. Create a network:
    ```bash
    docker network create teacode-net
    ```

2. Start NGINX container:
    ```bash
    docker run -d --name web --network teacode-net nginx
    ```

3. Start another container to ping it:
    ```bash
    docker run -it --name client --network teacode-net alpine sh
    apk add curl
    curl web
    ```

---
