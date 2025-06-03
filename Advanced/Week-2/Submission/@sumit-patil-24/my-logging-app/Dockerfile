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
