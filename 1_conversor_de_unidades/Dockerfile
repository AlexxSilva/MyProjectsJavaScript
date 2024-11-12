# Use a imagem oficial do Nginx como base
FROM nginx:alpine

# Copia os arquivos do projeto para o diretório onde o Nginx espera os arquivos estáticos
COPY . /usr/share/nginx/html

# Exponha a porta 80, que é a porta padrão do Nginx
EXPOSE 80

# Comando para rodar o Nginx no container
CMD ["nginx", "-g", "daemon off;"]