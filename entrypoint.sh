#!/bin/sh -l
cd /app

echo "INPUT_TITLE=$1" >> .env
echo "INPUT_DESCRIPTION=$2" >> .env

bun run build
cp -r ./out /github/workspace
