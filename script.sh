#!/bin/bash
# if found stop old container, rebuild image, run new one
docker stop naruto 2>/dev/null
docker rm naruto 2>/dev/null

docker build -t portfolio .
docker run -d --name naruto -p 8080:80 portfolio
echo "Started properly"