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
# Hapus konfigurasi default Nginx dan ganti dengan milik kita
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Menyalin hasil build dari Tahap 1
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]