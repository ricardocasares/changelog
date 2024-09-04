FROM oven/bun:1 AS installer
WORKDIR /app
COPY bun.lockb .
RUN bun install --frozen-lockfile
COPY . .
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
