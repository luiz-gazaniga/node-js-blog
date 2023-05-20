# Specify the base image
FROM node:18.16.0

# Set the working directory inside the container
WORKDIR /app

# Install build tools
RUN apt-get update && apt-get install -y build-essential

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]