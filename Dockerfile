#CONTAINER INTEGRATION
FROM node:16-alpine AS integration

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json .

RUN npm install

COPY . .

ARG NODE_ENV=INTEGRATION
ENV NODE_ENV=${NODE_ENV}

EXPOSE 80

#copy to another container cause the first container has all of the unnecessary typescript source code that we don't need or want to use, we just want the things in the folder that we created
#CONTAINER QUALIFICATION
FROM node:16 AS qualification

ARG NODE_ENV=QUALIFICATION
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

#the final container is going to be for production which includes only the necessary dependencies
RUN npm ci -- only=qualification  

COPY --from=integration /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]

EXPOSE 80

#CONTAINER PRODUCTION
FROM node:16 AS production

ARG NODE_ENV=PRODUCTION
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

#the final container is going to be for production which includes only the necessary dependencies
RUN npm ci -- only=production  

COPY --from=qualification /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]

EXPOSE 80