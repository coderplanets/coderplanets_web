
本项目基于 [next.js](https://github.com/zeit/next.js) 构建而来，遵循基本的 next.js 的[route 规则](https://github.com/zeit/next.js#routing)。

简单的讲就是 `目录结构即路由`, pages 目录的下的文件就是项目的所有路由，这些页面都支持服务端渲染：

```bash
.
├── _app.js
├── _document.js
├── _error.js
├── communities.js
├── community.js
├── index.js
├── job.js
├── post.js
├── repo.js
├── user.js
└── video.js
```

另外请求在到达这些页面之前会经过 express server 的自定义的中间层，详情请查看 [server.js](https://github.com/coderplanets/coderplanets_web/blob/dev/server.js)
