#!/bin/sh
set -e

echo "Waiting for database and running migrations..."

ATTEMPTS=0
MAX_ATTEMPTS=30
until ./node_modules/.bin/sequelize db:migrate --url "$DATABASE_URL"; do
  ATTEMPTS=$((ATTEMPTS+1))
  if [ "$ATTEMPTS" -ge "$MAX_ATTEMPTS" ]; then
    echo "Migrations failed after $MAX_ATTEMPTS attempts. Exiting."
    exit 1
  fi
  echo "Migration attempt $ATTEMPTS failed. Retrying in 2s..."
  sleep 2
done

echo "Starting server..."
node dist/server.js


