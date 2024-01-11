#!/bin/bash

git pull origin main

docker stop pepengenharia

docker rm pepengenharia

docker rmi pepengenharia

docker build -t pepengenharia .

docker run -d -p 4200:3000 --name pepengenharia pepengenharia