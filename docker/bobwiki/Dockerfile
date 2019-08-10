FROM node:11
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY bobwiki
EXPOSE 8080
CMD [ "node", "" ]
