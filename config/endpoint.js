/* config for different envs */

const getGraphQLEndpoint = () => {
  console.log('process.env.GOAL ', process.env.GOAL)
  switch (process.env.GOAL) {
    case 'production':
      /* return 'http://api.coderplanets.com/graphiql' */
      return 'http://localhost:8000/graphiql'

    case 'dev':
      console.log('process.env.GOAL pick 7001')
      return 'http://devapi.coderplanets.com/graphiql'

    case 'local':
      return 'http://localhost:4001/graphiql'

    default:
      console.log('pick default: ', process.env.GOAL)
      return 'http://localhost:4001/graphiql'
  }
}
const tmp = getGraphQLEndpoint()
console.log('first tmp: ', tmp)
export const GRAPHQL_ENDPOINT = tmp

/* export const GRAPHQL_ENDPOINT = getGraphQLEndpoint() */
export const GITHUB_ADDR = 'https://github.com/mydearxym/mastani_web'
export const GITHUB_ME = 'https://github.com/mydearxym'
export const ISSUE_ADDR = 'https://github.com/mydearxym/mastani_web/issues/new'
export const MENTION_USER_ADDR = 'https://coderplanets.com/users/'
