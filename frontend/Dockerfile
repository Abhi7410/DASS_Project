FROM node:14 as build-stage
WORKDIR /frontend
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
RUN npm install -g serve
CMD serve -s build
