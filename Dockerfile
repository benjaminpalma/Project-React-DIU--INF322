# Usa la imagen oficial de Node.js como base
FROM node:18-alpine

# Crear el directorio de la app y establecerlo como directorio de trabajo
WORKDIR /app

# Crear el proyecto base de React con npx y configura Tailwind CSS
RUN npx create-react-app . && \
    npm install -D tailwindcss postcss autoprefixer && \
    npx tailwindcss init -p

# Configurar el archivo de Tailwind CSS
RUN echo 'module.exports = { content: [ "./src/**/*.{js,jsx,ts,tsx}" ], theme: { extend: {} }, plugins: [] }' > tailwind.config.js

# Reemplazar el contenido del archivo index.css para importar Tailwind CSS
RUN echo '@tailwind base;\n@tailwind components;\n@tailwind utilities;' > src/index.css

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar el proyecto
CMD ["npm", "start"]
