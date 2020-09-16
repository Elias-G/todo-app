#Stage 1
From node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR	/app
COPY package.json /app
RUN npm install
RUN npm update
COPY . /app
RUN npm run build --prod


#Stage 2
From nginx:1.17.1-alpine
COPY --from=build-step /app/dist/todo-app /usr/share/nginx/html
