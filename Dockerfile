#base image
FROM node:12.2.0-alpine

#working directory
RUN mkdir /app
WORKDIR /app

# add '/app/node_modules/bin' to execution path
ENV PATH /app/node_modules/.bin:$PATH

# install dependencies and cache
COPY package*.json ./
RUN yarn 
RUN npm install react-scripts@3.0.1 -g 
COPY . ./



