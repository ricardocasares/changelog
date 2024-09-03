#!/bin/sh -l
cd /app
bun run build
mv out artifact
tar czf artifact.tar artifact
cp artifact.tar /github/workspace
