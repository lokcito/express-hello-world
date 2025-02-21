FROM node:16

WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

RUN npm install

# Copiar el resto del código fuente del proyecto al contenedor
COPY . .

# Exponer el puerto en el que la aplicación escuchará
EXPOSE 3000

# Ejecutar la aplicación
CMD ["node", "index"]
