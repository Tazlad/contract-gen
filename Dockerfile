# Multi-stage build for optimal image size
FROM python:3.11-slim as template-builder

# Install python-docx for template generation
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy template creation script
COPY create_template.py .

# Create templates directory and generate template
RUN mkdir -p templates && python create_template.py

# Main application stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install --production

# Copy application files
COPY server.js .
COPY public ./public

# Copy generated template from builder stage
COPY --from=template-builder /app/templates ./templates

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
