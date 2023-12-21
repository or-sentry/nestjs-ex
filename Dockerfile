# Bundle static assets with nginx
FROM nginx:1.24-alpine as production

COPY package*.json ./

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
