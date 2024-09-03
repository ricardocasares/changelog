FROM oven/bun:1 AS installer
WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
