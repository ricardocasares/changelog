FROM oven/bun:1 AS installer
WORKDIR /app
COPY . .

ENTRYPOINT ["bun", "run", "build"]
