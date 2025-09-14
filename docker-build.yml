# Gunakan Node.js LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json (kalau ada)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy semua file project
COPY . .

# Jalankan bot
CMD ["node", "index.js"]
