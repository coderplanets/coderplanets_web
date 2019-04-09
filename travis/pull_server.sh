#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"
cd ..
touch server_touched_files
echo "> check node"
node --version
echo "> check node"
git clone https://github.com/coderplanets/coderplanets_server.git
pwd
ls
echo "> done"
