# Usa la imagen oficial de Node.js como base
FROM node:18-alpine

# Crear el directorio de la app y establecerlo como directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias, incluyendo Tailwind CSS
RUN npm install

# Copiar el resto del código fuente de tu aplicación
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar el proyecto
CMD ["npm", "start"]
