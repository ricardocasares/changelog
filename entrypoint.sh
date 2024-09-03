#!/bin/sh -l
cd /app
bun run build
mv out artifact
zip artifact.zip artifact
cp artifact.zip /github/workspace
