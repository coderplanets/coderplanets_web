
前端的缓存分为两部分, `页面缓存` 和 `GraphQL查询缓存`


#### 页面缓存


页面缓存基于常见的 LRU 策略[lru-cache](https://github.com/isaacs/node-lru-cache), 目前默认缓存 30秒

```js
// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 1000, // cache item count
  // maxAge: 1000 * 60 * 60, // 1hour
  maxAge: 1000 * 30, // 30 ses
})
```

具体请查看 [server.js](https://github.com/coderplanets/coderplanets_web/blob/dev/server.js) 缓存相关代码。


#### Graphql 查询缓存

本项目默认使用了 [ApolloClient](https://github.com/apollographql/apollo-client) 的 MemoryCache, 相同的 GraphQL 查询会被缓存到内存里， 相关配置详见： [setup](https://github.com/coderplanets/coderplanets_web/blob/dev/utils/async/setup.js#L88)

```js
export const client = new ApolloClient({
  link,
  /* cache: new InMemoryCache(), */
  cache: new InMemoryCache(),
  connectToDevTools: true,
  /* shouldBatch: false, */
  // defaultOptions,
})
```

但是要非刷新页面的清理查询缓存比较麻烦，目前采用的策略是一旦用户发生 mutate 操作就清空所有缓存，重新从服务器获取([issue](https://github.com/coderplanets/coderplanets_web/issues/335)):

```js
const doMutate = (mutation, variables) =>
  client
    .mutate({
      mutation,
      variables,
      context,
    })
    .then(res => {
      // once login user has mutation to server
      // then clear all the cache store in Apollo client.
      client.clearStore()
      return res.data
    })
    .catch(formatGraphErrors)
```










