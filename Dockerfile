# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Install any needed packages specified in package.json
COPY package*.json ./
RUN npm install

# Bundle the source code inside the Docker image
COPY . .

# Make port 3000 available outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]
