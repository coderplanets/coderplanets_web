/* config for different envs */

export const otherAPI = '....'

const getGraphQLEndpoint = () => {
  switch (process.env.GOAL) {
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
