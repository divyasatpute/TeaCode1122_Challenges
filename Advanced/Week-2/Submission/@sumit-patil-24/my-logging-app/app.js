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
