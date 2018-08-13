#!/bin/bash

cd /root/web/
# npm run launch:dev &
pm2-runtime start npm --name "coderplanets_web" -- run launch:dev &

while true
do
    sleep 100
done
