FROM oven/bun:1 AS installer
WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile

ENTRYPOINT ["bun", "run", "build"]
