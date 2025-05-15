# ⚙️ Medium - Week 1 Challenge: Setup NGINX as Reverse Proxy

## 🎯 Goal
Use NGINX to reverse proxy traffic to a local Node.js app running on port 3000.

## 🛠️ Task
1. Install NGINX
2. Run a simple Node.js app (`app.js`) on port 3000
3. Configure NGINX to forward requests from port 80 to 3000

## 💡 Helpful
- Use `proxy_pass http://localhost:3000;` in `nginx.conf`
- Sample Node.js app:
```js
const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from Node app!');
}).listen(3000);

