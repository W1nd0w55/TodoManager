FROM node:alpine3.21

WORKDIR /frontend
COPY . .

EXPOSE 5173

RUN npm i vite@latest react-router-dom tailwindcss @tailwindcss/vite
RUN npm cache clean --force

# skips cache
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
RUN npm run build
ENTRYPOINT [ "npm", "run", "dev" ]