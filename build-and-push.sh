#!/bin/sh
# Build Docker image
docker build -t your-dockerhub-username/your-repo-name:tag .

# Log in to Docker Hub
docker login

# Push Docker image to Docker Hub
docker push your-dockerhub-username/your-repo-name:tag