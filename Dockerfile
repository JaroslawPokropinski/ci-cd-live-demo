FROM node:12

# Create app directory
WORKDIR /usr/src/app


COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD [ "node", "build/index.js" ]