FROM node:16.13.0

RUN mkdir /root/web

ADD web.tar.gz /root/web
RUN npm install -g pm2 
RUN cd /root/web/ && npm install --production
RUN cd /root/web/ && make build.prod

ADD loader.sh /usr/local/bin/loader.sh
RUN chmod +x /usr/local/bin/loader.sh
CMD ["/usr/local/bin/loader.sh"]