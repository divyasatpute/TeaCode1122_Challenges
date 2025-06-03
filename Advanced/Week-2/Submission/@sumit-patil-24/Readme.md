### This guide will help you create a basic Node.js application that logs incoming requests to a file named /app/logs/requests.log
## Prerequisites:
Node.js installed on your system.

## Steps:
## 1.Create your project directory:
```bash
mkdir my-logging-app
cd my-logging-app
```

## 2. Initialize your Node.js project:

```bash
npm init -y
```
This will create a package.json file.

## 3.Install necessary packages:
We'll use express for the web server and morgan for HTTP request logging.
```bash
npm install express morgan
```

## 4.Create the logging directory:
It's good practice to ensure the log directory exists.
```bash
mkdir -p app/logs
```

## 5.Create your main application file (app.js):
Create a file named app.js in your my-logging-app directory and add the following code:
```bash
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Ensure the log directory exists
const logDirectory = path.join(__dirname, 'app', 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory, { recursive: true });

// Create a write stream (in append mode) for the log file
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'requests.log'), { flags: 'a' });

// Setup the logger
// 'combined' format includes common log information (IP, date, method, URL, status, content-length, referrer, user-agent)
// The stream option directs output to our file stream
app.use(morgan('combined', { stream: accessLogStream }));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World! Check the logs at /app/logs/requests.log');
});

app.get('/test', (req, res) => {
  res.send('This is a test page!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  console.log(`Requests will be logged to: ${path.join(logDirectory, 'requests.log')}`);
});
```

## 6.Run your application:
```bash
node app.js
```
You should see output similar to this:
```
Server listening at http://localhost:3000
Requests will be logged to: /path/to/your/my-logging-app/app/logs/requests.log
```

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
