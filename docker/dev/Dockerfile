FROM node:10-alpine

RUN mkdir /root/web

# ADD web.tar.gz /root/web
# RUN cd /root/web/ && npm install --registry=https://registry.npm.taobao.org

ADD loader.sh /usr/local/bin/loader.sh
RUN chmod +x /usr/local/bin/loader.sh
CMD ["/usr/local/bin/loader.sh"]