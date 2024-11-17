# Bundle static assets with nginx
FROM nginx:1.26.2-alpine as production

COPY package*.json ./

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
