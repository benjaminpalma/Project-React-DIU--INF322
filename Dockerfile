# Usa una imagen oficial de Node.js
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración de dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente al contenedor
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "start"]