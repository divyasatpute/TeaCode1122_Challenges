# Submission: Medium Week 1 - @aditya-2010

## Step 1: Run the Node.js app

```
node app.js
```

## Step 2: Install NGINX

If not already installed, use the following command:

```bash
sudo apt update
sudo apt install nginx
```

## Step 3: Configuration file

Copy the the `nginx.conf` file to the `/etc/nginx/sites-available` directory

## Step 4: Enable the Configuration

Link your site configuration to `sites-enabled` with symbolic link:

```
sudo ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled/
```

## Step 5: Test and Reload NGINX

```
sudo nginx -t
sudo systemctl restart nginx
```

## Step 6: Test the reverse proxy server

Access via browser: Open `http://localhost` and you should see: Hello from Node app!