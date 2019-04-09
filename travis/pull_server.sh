#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"
cd ..
touch server_touched_files
ls
echo "> Getting server repo..."
git clone https://github.com/coderplanets/coderplanets_server.git

cd coderplanets_server
echo "> where i am?"
pwd
echo "> done"
