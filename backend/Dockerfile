FROM node:14
WORKDIR /backend
COPY package.json .
RUN yarn
COPY . .
CMD node server.js