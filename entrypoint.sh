#!/bin/sh -l
ls -la
ls -la /app

echo "INPUT_TITLE=$1" >> .env
echo "INPUT_DESCRIPTION=$2" >> .env

ls -la

bun run build
