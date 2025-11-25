#!/bin/bash

# Employee Contract Generator - Start Script
# This script builds and starts the Docker container

echo "================================================"
echo "Employee Contract Generator - Unique Needs"
echo "================================================"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed."
    echo "Please install Docker Desktop from: https://www.docker.com/products/docker-desktop"
    exit 1
fi

echo "Building Docker container..."
docker compose build

if [ $? -ne 0 ]; then
    echo ""
    echo "Error: Failed to build Docker container."
    exit 1
fi

echo ""
echo "Starting application..."
docker compose up -d

if [ $? -ne 0 ]; then
    echo ""
    echo "Error: Failed to start application."
    exit 1
fi

echo ""
echo "================================================"
echo "✓ Application started successfully!"
echo "================================================"
echo ""
echo "Access the application at: http://localhost:3000"
echo ""
echo "To stop the application, run:"
echo "  docker compose down"
echo ""
echo "To view logs, run:"
echo "  docker compose logs -f"
echo ""
