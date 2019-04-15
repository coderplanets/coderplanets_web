#!/bin/bash

echo "> install nvm"
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh
echo "> check nvm"
nvm --version
echo "> use node 10.10"
nvm install 10.10.0
nvm use 10.10.0
echo "> install node done"
node --version
pwd
