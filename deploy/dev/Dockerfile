FROM node:12.3.1

RUN mkdir /root/web

ADD web.tar.gz /root/web
RUN npm install -g pm2 --registry=https://registry.npm.taobao.org
RUN cd /root/web/ && npm install --registry=https://registry.npm.taobao.org

RUN cd /root/web/ && make build.dev

ADD loader.sh /usr/local/bin/loader.sh
RUN chmod +x /usr/local/bin/loader.sh
CMD ["/usr/local/bin/loader.sh"]