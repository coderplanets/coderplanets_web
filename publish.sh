#!/bin/bash

ENV="$1"

if [ "$ENV" == "prod" ];then
    echo "[Step 0/5] running ./docker/production/packer.sh"
    ./docker/production/packer.sh
elif [ "$ENV" == "dev" ]
then
    echo "[Step 0/5] running ./docker/dev/packer.sh"
    ./docker/dev/packer.sh
else
    echo "invalid publish env, support env: dev / prod"
    echo "usage: ./publish.sh dev OR ./publish.sh prod"
fi
