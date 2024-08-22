#CONTAINER INTEGRATION
FROM node:18-alpine AS build-stage

# Create app directory
WORKDIR /app

# Install app dependencies
COPY .env ./
COPY package*.json .

RUN npm install

COPY . .

# Build the application
RUN npm run build

# Serve the built application with a lightweight web server
FROM nginx:alpine

# Copy the build output from the previous stage to the NGINX html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]