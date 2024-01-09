FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY ./ ./
RUN pnpm install
RUN npm prune --omit=dev
# RUN npm ci --only=production
EXPOSE 3000
CMD ["pnpm", "start"]
