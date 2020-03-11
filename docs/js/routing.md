This project is built on [next.js](https://github.com/zeit/next.js) and follows the basic [next route rules](https://github.com/zeit/next .js#routing).

Simply put, the `directory structure is the route`. The files under the pages directory are all the routes of the project. These pages support server-side rendering:

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

In addition, the request will go through the custom middle layer of the express server before reaching these pages. For details, please see [server.js](https://github.com/coderplanets/coderplanets_web/blob/dev/server.js)
