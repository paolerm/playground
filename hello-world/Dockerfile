FROM node:14

EXPOSE 3000

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

CMD ["node", "dist/app.js"]
