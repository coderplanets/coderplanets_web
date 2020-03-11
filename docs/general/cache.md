The front-end cache is divided into two parts, `Page Cache` and `GraphQL Query Cache.

#### Page Cache

The page cache is based on the common LRU policy [lru-cache](https://github.com/isaacs/node-lru-cache), which is currently cached for 30 seconds.

```js
// This is where we cache our rendered HTML pages
Const ssrCache = new LRUCache({
  Max: 1000, // cache item count
  // maxAge: 1000 * 60 * 60, // 1hour
  maxAge: 1000 * 30, // 30 ses
})
```

See [server.js](https://github.com/coderplanets/coderplanets_web/blob/dev/server.js) for details on caching related code.

#### Graphql Query Cache

This project uses MemoryCache of [ApolloClient](https://github.com/apollographql/apollo-client) by default, and the same GraphQL query will be cached into memory. For details, see: [setup](https:// Github.com/coderplanets/coderplanets_web/blob/dev/utils/async/setup.js#L88)

```js
Export const client = new ApolloClient({
  Link,
  /* cache: new InMemoryCache(), */
  Cache: new InMemoryCache(),
  connectToDevTools: true,
  /* shouldBatch: false, */
  // defaultOptions,
})
```

However, it is cumbersome to clean up the query cache for non-refreshing pages. The current strategy is to clear all caches once the user has a mutate operation and re-obtain them from the server ([see issue](https://github.com/coderplanets/coderplanets_web/issues/335)):

```js
Const doMutate = (mutation, variables) =>
  Client
    .mutate({
      Mutation,
      Variables,
      Context,
    })
    .then(res => {
      // once login user has mutation to server
      // then clear all the cache store in Apollo client.
      client.clearStore()
      Return res.data
    })
    .catch(formatGraphErrors)
```
