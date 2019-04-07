#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"

echo "> Getting data..."
git clone https://github.com/coderplanets/coderplanets_server.git

# MIX_ENV=test mix deps.get

echo "> done"
