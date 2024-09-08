# Use an official image as a base
FROM alpine:latest

# Set a working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Run a simple command
CMD ["echo", "Hello, World!"]