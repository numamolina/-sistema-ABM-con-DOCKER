# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app


COPY package*.json ./
COPY . .


RUN npm install


RUN npm run build

# Sirve la aplicación en un servidor web
RUN npm install -g serve
CMD ["serve", "-s", "build"]


EXPOSE 3000
