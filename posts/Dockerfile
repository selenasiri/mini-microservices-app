FROM node:alpine
ENV CI=true

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]

# $ docker build -t selenasiri/posts .
# run: $ docker run --publish 8000:4000 --detach --name posts selenasiri/posts
# GET http://localhost:8000/posts  
# result: {"name":"selena siri"}