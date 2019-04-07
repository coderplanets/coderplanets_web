#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"

echo "> Getting data..."
git clone https://github.com/coderplanets/coderplanets_server.git

cd coderplanets_server
echo "> where i am?"
pwd
echo "> done"
