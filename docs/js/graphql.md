This document assumes that you already know the basics of GraphQL. If you don't know much about it, please refer to _https://www.howtographql.com/_

### Overview

All interfaces of CPS are provided and only the GraphQL interface is available. All GraphQL requests can only be initiated in two places:

1. In the pages directory, prepare the data for the server's server rendering.
2. In the logic.js file of each container component (the corresponding schema file is located in the same directory)

### how to use

Take `containers/PostsThread/schema.js` as an example:

```js
Import gql from 'graphql-tag'
Import { P, F } from '@schemas'

Const pagedPosts = gql`
  ${P.pagedPosts}
`
Const partialTags = gql`
  ${P.partialTags}
`

Const pagedCommunities = gql`
  Query($filter: CommunitiesFilter!) {
    pagedCommunities(filter: $filter) {
      Entries {
        ${F.community}
        contributesDigest
        subscribersCount
      }
      ${F.pagedCounts}
    }
  }
`

Const schema = {
  pagedPosts,
  partialTags,
  pagedCommunities,
}

Export default schema
```

P, F are common schema fragments (note that not strictly Fragment, but very similar). After exporting the Schema, you can use it in the same directory's logic.js:

```js
Const loadCityCommunities = () => {
  ....
  Sr71$.query(S.pagedCommunities, args)
  ....
}
```

### API Documentation

You can open the `https://coderplanets.com/graphiql` using the online interactive tool to query and use the API.

![image](https://user-images.githubusercontent.com/6184465/51720977-ae199a80-208a-11e9-9e9e-2617f53a8616.png)

For detailed usage, please refer to the [Reference Document](https://github.com/prisma/graphql-playground)

> Note: If you want to develop a third-party client, please do not use the main station for debugging. Please use https://dev.coderplanets.com for development.

### Model Visualization

You can visually view the relationship between models by opening `https://coderplanets.com/model-graphs`:

![image](https://user-images.githubusercontent.com/6184465/51719807-df439c00-2085-11e9-99d8-b1848fbb77b6.png)
