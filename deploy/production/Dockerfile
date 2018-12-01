FROM node:10.13

RUN mkdir /root/web

ADD web.tar.gz /root/web
RUN npm install -g pm2 --registry=https://registry.npm.taobao.org
RUN cd /root/web/ && npm install --registry=https://registry.npm.taobao.org

ARG GITHUB_CLIENT_ID=3b4281c5e54ffd801f85
ARG SERVE_PORT=8002
ARG SENTRY_TOKEN=https://c3736f9e69124719b594e8a746815a26@sentry.io/1260565
ARG GA_TRACING_ID=UA-39874160-3
ARG ALI_ACCESS_KEY=LTAI2MaCLBIxeAAB
ARG ALI_ACCESS_SECRET=mCDkKXHwsDe6TOOv1OYJHmTdeILWBB
ARG ALI_OSS_BUCKET=cps-oss
ARG ALI_OSS_RESION=oss-cn-shanghai
ARG ALI_OSS_ADDR=https://cps-oss.oss-cn-shanghai.aliyuncs.com

RUN cd /root/web/ && make build.prod

ADD loader.sh /usr/local/bin/loader.sh
RUN chmod +x /usr/local/bin/loader.sh
CMD ["/usr/local/bin/loader.sh"]