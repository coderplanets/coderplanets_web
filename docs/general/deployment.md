The front end of the project is deployed in the Alibaba Cloud swarm cluster using [docker](https://github.com/coderplanets/coderplanets_web/blob/docs/deploy/production/Dockerfile).

The deployment process is simplified as follows:

1. Locally develop the corresponding branch of the push, trigger Travis build
2. If there is no problem, merge to master, push and automatically trigger Alibaba Cloud docker build
3. Manually publish the image after the build is correct (the grayscale publishing strategy will be adopted later)


![](https://raw.githubusercontent.com/coderplanets/coderplanets_server/dev/docs/snapshots/deployment.png)
