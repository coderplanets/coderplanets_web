FROM node:10-alpine

RUN mkdir /root/web

# ADD web.tar.gz /root/web
# RUN cd /root/web/ && npm install --registry=https://registry.npm.taobao.org

ADD loader.sh /user/local/bin/loader.sh
RUN chmod +x /user/local/bin/loader.sh
CMD ["/user/local/bin/loader.sh"]