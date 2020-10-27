#!/bin/bash

echo "> install nvm"
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh
echo "> check nvm"
nvm --version
echo "> use node 14.14.0"
nvm install 14.14.0
nvm alias default 14.14.0
echo "> install node done"
node --version
pwd
