
async 基于 [rx.js](https://github.com/reactivex/rxjs) 封装而来，目的是以统一的接口响应应用中的各种异步事件，如网络，消息，服务器推送等等, 并提供基本的防抖、超时，可取消等特性。

每一个 logic.js 文件都会引入 sr71 模块：

```js
import SR71 from 'utils/async/sr71'
const sr71$ = new SR71()
```


备注: sr71 为美军黑鸟侦察机的代号:


![image](https://user-images.githubusercontent.com/6184465/51725044-34d67380-209b-11e9-87a4-9edeec396958.png)


### 网络事件


你可以在函数中调用网络请求, query 和 mutate 分别代表 GraphQL 中的 query 和 mutate 操作

```js
sr71$.query(S.pagedPosts, args)
// or
sr71$.mutate(S.updateProfile, args)
```

对应的，在 DataSolver 中响应服务器返回的数据(DataSover 会由 `make gen` 生成器自动生成):

```js
const DataSolver = [
  {
    match: asyncRes('updateProfile'),
    action: () => {
      updateDone()
      cancleLoading()
    },
  },
]
```

### 异步消息

容器组件可以在初始化的时候监听需要响应的异步事件，比如：

```js
const sr71$ = new SR71({
  resv_event: [
    EVENT.PREVIEW_OPEN,
    EVENT.PREVIEW_CLOSE,
    EVENT.UPLOAD_IMG_START,
    EVENT.UPLOAD_IMG_FINISH,
  ],
})
```

代表该容器组件接收 4 个消息， 分别是  EVENT.PREVIEW_OPEN, EVENT.PREVIEW_CLOSE, EVENT.UPLOAD_IMG_START, EVENT.UPLOAD_IMG_FINISH

对应的 DataSolver: 

```js
{
    match: asyncRes(EVENT.PREVIEW_OPEN),
    action: res => {
      const payload = res[EVENT.PREVIEW_OPEN]
      holdPage()

      store.open(payload)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSE),
    action: () => closePreview(),
  },
  {
    match: asyncRes(EVENT.UPLOAD_IMG_START),
    action: () => store.markState({ imageUploading: true }),
  },
  {
    match: asyncRes(EVENT.UPLOAD_IMG_FINISH),
    action: () => {
      setTimeout(() => {
        store.markState({ imageUploading: false })
      }, 500)
    },
  },
```

### 推送事件

与之类似， TODO


### 错误处理

错误处理的逻辑统一由 ErrSolver 内，以统一的方式分别响应 GraphQL 解析错误，请求错误，超时错误，网络错误等等。`errRescue`为全局的错误提示、显示组件([详情](https://github.com/coderplanets/coderplanets_web/issues/340)), 同时出错后一些组件内部的状态，如 loading 等等，也在这里处理。

```js
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancleLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'AccountEditor' })
    },
  },
]
```

![image](https://user-images.githubusercontent.com/6184465/51435747-e5b6ca00-1cb9-11e9-8da7-19e027675dd5.png)











