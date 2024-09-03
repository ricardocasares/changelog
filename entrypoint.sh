#!/bin/sh -l
ls -la

echo "INPUT_TITLE=$1" >> .env
echo "INPUT_DESCRIPTION=$2" >> .env

ls -la

bun run build
