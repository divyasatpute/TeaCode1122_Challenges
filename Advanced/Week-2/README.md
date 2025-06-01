## 🔴 Advanced Task – Multi-Stage Build with Logging + Volumes

### ✅ Goal:
Build an optimized Docker image and persist logs using volumes.

### 📝 Instructions:
1. Create a basic Node.js app with logging to `/app/logs/requests.log`.
2. Create a multi-stage Dockerfile:
    ```dockerfile
    # Build stage
    FROM node:18-alpine AS builder
    WORKDIR /app
    COPY . .
    RUN npm install

    # Run stage
    FROM node:18-alpine
    WORKDIR /app
    COPY --from=builder /app .
    VOLUME [ "/app/logs" ]
    CMD ["node", "app.js"]
    ```

3. Run with a volume:
    ```bash
    docker run -v logs-vol:/app/logs -p 3000:3000 teacode-node
    ```

---

## 📸 How to Contribute

- Fork this repo  
- Create a folder with your name inside each task level  
- Push your code and screenshots  
- Raise a Pull Request  

---

## 💬 Community Sharing

- Post screenshots in the group  
- Share bugs and learnings  
- Help others with stuck points  
- Tag your post: `#WeeklyTask #TeaCode1122`

---

## 🌟 Let’s build, break, and grow — together!
