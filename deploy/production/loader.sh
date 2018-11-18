#!/bin/bash

cd /root/web/

# make build.prod
pm2-runtime start npm --name "coderplanets_web" -- run launch.prod &

while true
do
    sleep 100
done
