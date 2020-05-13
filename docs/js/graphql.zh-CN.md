本文档假设你已经了解 GraphQL 的基础知识， 如果你对它还不太了解，请参考 _https://www.howtographql.com/_

### 概况

CPS 所有接口提供，并且只提供 GraphQL 接口。所有 GraphQL 请求只能在两个地方发起：

1. 在 pages 目录下，为页面的服务端渲染准备数据。
2. 在每个容器组件的 logic.js 文件中（相应的 schema 文件位于同目录下）

### 怎样使用

以 `containers/PostsThread/schema.js` 为例：

```js
import gql from 'graphql-tag'
import { P, F } from '@/schemas'

const pagedPosts = gql`
  ${P.pagedPosts}
`
const partialTags = gql`
  ${P.partialTags}
`

const pagedCommunities = gql`
  query($filter: CommunitiesFilter!) {
    pagedCommunities(filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
        subscribersCount
      }
      ${F.pagedCounts}
    }
  }
`

const schema = {
  pagedPosts,
  partialTags,
  pagedCommunities,
}

export default schema
```

P, F 均为公用 schema 片段（注意不是严格意义上的 Fragment, 但很类似)。导出 Schema 后可以在同目录的 logic.js 中使用：

```js
const loadCityCommunities = () => {
  ....
  sr71$.query(S.pagedCommunities, args)
  ....
}
```

### API 文档

你可以打开 `https://coderplanets.com/graphiql` 使用在线互动的工具，查询和使用 API

![image](https://user-images.githubusercontent.com/6184465/51720977-ae199a80-208a-11e9-9e9e-2617f53a8616.png)

详细用法请[参考文档](https://github.com/prisma/graphql-playground)

> 注意: 如果您要开发第三方的客户端请不要直接使用主站进行调试，开发请使用 https://dev.coderplanets.com

### 模型可视化

你可以打开 `https://coderplanets.com/model-graphs` 可视化的查看 model 之间的关系：

![image](https://user-images.githubusercontent.com/6184465/51719807-df439c00-2085-11e9-99d8-b1848fbb77b6.png)
