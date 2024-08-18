# Use an official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
