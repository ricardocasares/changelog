FROM oven/bun:1 AS installer
WORKDIR /app
COPY . .
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
