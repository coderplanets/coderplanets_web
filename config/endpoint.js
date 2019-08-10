/* config for different envs */
import { ICON_CMD } from './assets'
import * as CONFIG from './config.json'

export const { GRAPHQL_ENDPOINT } = CONFIG // getGraphQLEndpoint()

export const SITE_URL = 'https://coderplanets.com'
export const GITHUB_WEB_ADDR =
  'https://github.com/coderplanets/coderplanets_web'
export const GITHUB_SERVER_ADDR =
  'https://github.com/coderplanets/coderplanets_server'

export const API_SERVER_ADDR = 'http://api.coderplanets.com/graphiql'

export const GITHUB_ME = 'https://github.com/mydearxym'
export const GITHUB_CPS_TEAM = 'https://github.com/orgs/coderplanets/people'
export const ISSUE_ADDR = `${GITHUB_WEB_ADDR}/issues`
export const MENTION_USER_ADDR = 'https://coderplanets.com/users/'

export const COMMUNITY_WIKI =
  'https://github.com/coderplanets/cps_wiki/blob/master'

export const COMMUNITY_CHEATSHEET =
  'https://github.com/coderplanets/cps_cheatsheets/blob/master'

export const DEFAULT_USER_AVATAR = `${ICON_CMD}/alien_user3.svg`
