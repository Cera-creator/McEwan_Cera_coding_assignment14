# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Set working directory
WORKDIR /McEwan_Cera_final_site

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve to host the production build
RUN npm install -g serve

# Expose port 5575 as specified in requirements
EXPOSE 5575

# Set container name (this will be overridden by docker run command)
LABEL container_name="McEwan_Cera_coding_assignment14"

# Start the application on port 5575
CMD ["serve", "-s", "dist", "-l", "5575"]
