#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"
pwd
echo "> pull server"
cd ..
git clone https://github.com/coderplanets/coderplanets_server.git
pwd
ls -ll
echo "> done"
