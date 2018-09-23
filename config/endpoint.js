/* config for different envs */

const getGraphQLEndpoint = () => {
  /* console.log('process.env: ', process.env) */
  console.log('process.env.GOAL: ', process.env.GOAL)
  /* console.log('process.env.NODE_ENV: ', process.env.NODE_ENV) */
  /* console.log('process.env.NODE_ENV: ', process.env.NODE_ENV) */
  switch (process.env.GOAL) {
    case 'production':
      return 'http://api.coderplanets.com/graphiql'
    /* return 'http://localhost:4001/graphiql' */

    case 'dev':
      return 'http://devapi.coderplanets.com/graphiql'
    /* return 'http://devapi.coderplanets.com' */

    case 'local':
      return 'http://localhost:4001/graphiql'
    /* return 'http://localhost:7000/graphiql' // work */

    default:
      return 'http://localhost:4001/graphiql'
  }
}
export const GRAPHQL_ENDPOINT = getGraphQLEndpoint()
export const GITHUB_ADDR = 'https://github.com/coderplanets/coderplanets_web'
export const GITHUB_ME = 'https://github.com/mydearxym'
export const ISSUE_ADDR = `${GITHUB_ADDR}/issues/new`
export const MENTION_USER_ADDR = 'https://coderplanets.com/users/'
