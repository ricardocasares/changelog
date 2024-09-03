#!/bin/sh -l
cd /app
bun run build
cp -r ./out /github/workspace
ls -la /github/workspace
