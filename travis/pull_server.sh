#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"
pwd
echo "> pull server"
cd ..
git clone https://github.com/coderplanets/coderplanets_server.git
cd coderplanets_server
mix deps.get
echo "> setup test server"
MIX_ENV=ci mix ecto.setup > /dev/null
echo "> seed test data"
MIX_ENV=ci mix run priv/mock/cps_seeds.exs > /dev/null
echo "> running test server"
MIX_ENV=ci mix phx.server &
cd ..
pwd
echo "> done: phoenix server is running"
