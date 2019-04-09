#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"
cd ..
touch server_touched_files
echo "> install nvm"
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
echo "> check nvm"
nvm --version
git clone https://github.com/coderplanets/coderplanets_server.git
pwd
ls
echo "> done"
