# --- TAHAP 1: Build React App ---
FROM node:18-alpine as builder

WORKDIR /app

# Install dependensi
COPY package*.json ./
RUN npm install

# Salin source code dan build project
COPY . .
RUN npm run build

# --- TAHAP 2: Serve dengan Nginx ---
FROM nginx:alpine

# Menyalin hasil build dari Tahap 1 ke folder default Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Mengekspos port 80 di dalam container (yang nanti ditangkap Reverse Proxy)
EXPOSE 80

# Menjalankan Nginx
CMD ["nginx", "-g", "daemon off;"]