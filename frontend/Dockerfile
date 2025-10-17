FROM node:trixie-slim

RUN apt update && apt upgrade -y

WORKDIR /frontend
COPY . .

EXPOSE 5173

RUN npm i vite@latest
ENTRYPOINT [ "npm", "run", "dev", "--host" ]
