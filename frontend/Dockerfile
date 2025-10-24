FROM node:alpine3.21

WORKDIR /frontend
COPY . .

EXPOSE 5173

RUN npm i vite@latest react-router-dom tailwindcss @tailwindcss/vite
RUN npm cache clean --force
ENTRYPOINT [ "npm", "run", "dev" ]