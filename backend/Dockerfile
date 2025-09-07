FROM node:20-alpine AS builder
WORKDIR /app

# Enable Yarn Classic and install deps
RUN corepack enable && corepack prepare yarn@1.22.22 --activate
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy sources
COPY tsconfig.json ./
COPY src ./src
COPY config ./config
COPY migrations ./migrations

# Build TypeScript
RUN yarn build


FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

# Copy built app and dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/config ./config
COPY --from=builder /app/migrations ./migrations

# Entrypoint to run migrations then start server
COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

EXPOSE 5001

CMD ["sh", "./docker-entrypoint.sh"]


