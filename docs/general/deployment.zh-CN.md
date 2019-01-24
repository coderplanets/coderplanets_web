
本项目前端部分使用 [docker](https://github.com/coderplanets/coderplanets_web/blob/docs/deploy/production/Dockerfile) 部署在阿里云。简单来讲本地开发完成，待 CI 通过后 merge 到 master  分支，会触发阿里的自动构建，之后再手动更改镜像配置即可。

![](https://raw.githubusercontent.com/coderplanets/coderplanets_server/dev/docs/snapshots/deployment.png)
