#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"
cd ..
touch server_touched_files
echo "> check nvm"
nvm --version
git clone https://github.com/coderplanets/coderplanets_server.git
pwd
ls
echo "> done"
