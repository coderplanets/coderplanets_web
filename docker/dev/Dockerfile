FROM node:10-alpine

# change timezone to +8
# RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

RUN mkdir /root/web

RUN npm install -g pm2 --registry=https://registry.npm.taobao.org

ADD web.tar.gz /root/web
RUN cd /root/web/ && npm install --registry=https://registry.npm.taobao.org

ADD loader.sh /user/local/bin/loader.sh
RUN chmod +x /user/local/bin/loader.sh
CMD ["/user/local/bin/loader.sh"]