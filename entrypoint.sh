#!/bin/sh -l
cd /app
# title
echo $1 >> .env
# description
echo $2 >> .env
# build app
bun run build
