/* config for different envs */
export const GRAPHQL_ENDPOINT = getGraphQLEndpoint()

export const others = 1

const getGraphQLEndpoint = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'http://api.coderplanets.com/graphiql'

    case 'development':
      return 'http://devapi.coderplanets.com/graphiql'

    case 'mock':
      return 'http://localhost:4001/graphiql'

    default:
      return 'http://localhost:4001/graphiql'
  }
}
