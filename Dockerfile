#1. Use an official Node runtime as a parent image
FROM node:18-alpine as build

#2. Set the working directory to /app
WORKDIR /app

#3. Copy your React app's source code and package.json (and package-lock.json if you have one) into the container
COPY package*.json ./
COPY . .

#4. Install any needed project dependencies
RUN npm install -g npm
RUN npm install
EXPOSE 5173

#5. Make the app's build
RUN npm run build

#6 Set the command to start the app
CMD ["npm", "run", "dev"]
