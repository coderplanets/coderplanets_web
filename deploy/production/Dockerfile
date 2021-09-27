FROM node:12.3.1

# RUN ls -llh
# RUN mkdir -p ~/bin && curl -sSL -o ~/bin/jq https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && chmod +x ~/bin/jq
# RUN mkdir -p ~/bin && chmod +x ./jq-linux64 && mv jq-linux64 ~/bin/jq
# RUN mkdir -p ~/bin && curl -sSL -o ~/bin/jq https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && chmod +x ~/bin/jq
# RUN export PATH=$PATH:~/bin
# RUN /bin/jq --version

RUN mkdir /root/web

ADD web.tar.gz /root/web
RUN npm install -g pm2 --registry=https://registry.npm.taobao.org
RUN cd /root/web/ && npm install --registry=https://registry.npm.taobao.org
RUN cd /root/web/ && npm i terser@3.14


ARG SERVE_PORT=8002
ARG GA_TRACING_ID=UA-39874160-3
RUN cd /root/web/ && make build.prod

ADD loader.sh /usr/local/bin/loader.sh
RUN chmod +x /usr/local/bin/loader.sh
CMD ["/usr/local/bin/loader.sh"]