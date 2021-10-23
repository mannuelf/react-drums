FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY ./ ./
RUN yarn install
# RUN npm ci --only=production
EXPOSE 3000
CMD ["yarn", "start"]