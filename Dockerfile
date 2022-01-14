FROM node:16.7-alpine
COPY . /src/app
WORKDIR /src/app
RUN npm install
CMD ["npm", "start"]