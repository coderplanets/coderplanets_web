
## Development


`npm run prod` -- will use production endpoint as data server which is defined in `config/endpoint.js`

`npm run dev` -- will use dev endpoint as data server which is defined in `config/endpoint.js`

`npm run local` -- will use localhost:4001 as data server which is defined in `config/endpoint.js`

config/endpoint.js

```js
export const otherAPI = '....'

const getGraphQLEndpoint = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'http://api.coderplanets.com/graphiql'

    case 'dev':
      return 'http://devapi.coderplanets.com/graphiql'

    case 'local':
      return 'http://localhost:4001/graphiql'

    default:
      return 'http://localhost:4001/graphiql'
  }
}

export const GRAPHQL_ENDPOINT = getGraphQLEndpoint()
```
you can edit it to match your own needs.


## env

frontend code can not use NODE_ENV directly, this project use [webpack-env](https://github.com/mrsteele/dotenv-webpack)(`systemvars:true`) to pass the `NODE_ENV` env to frontend code, so frontend code can use it like 'process.env.NODE_ENV'. 

see next.config.js [details](https://github.com/mydearxym/mastani_web/blob/dev/next.config.js#L56-L60)
```js
config.plugins.push(
  new Dotenv({
    path: './.env',
    systemvars: true,
  })
)
```
