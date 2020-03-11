本项目前端部分使用 [docker](https://github.com/coderplanets/coderplanets_web/blob/docs/deploy/production/Dockerfile) 部署在阿里云 swarm 集群。

部署流程简化如下：

1. 本地开发推送的相应分支，触发 Travis 构建
2. 没有问题的话 merge 到 master, 推送并自动触发阿里云 docker 构建
3. 构建无误后手动发布镜像(后期会采用灰度发布策略)

![](https://raw.githubusercontent.com/coderplanets/coderplanets_server/dev/docs/snapshots/deployment.png)
