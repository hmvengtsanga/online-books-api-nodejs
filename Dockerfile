FROM node:18

# WORKDIR /src
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g nodemon && npm install
COPY . .

# CMD npm run server
CMD [ "npm", "run", "server"]
# CMD npm start