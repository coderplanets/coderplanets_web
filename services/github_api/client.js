import fetchJsonp from 'fetch-jsonp'
import fetch from 'isomorphic-fetch'

import { BStore, makeGithubExplore } from '@utils'
import { graphqlEndpoint } from './config'

const token = BStore.get('github_token')

const v3EndpointOpt = {
  headers: { Authorization: `token ${token}` },
}

// graphql client
export const graphqlClient = makeGithubExplore(graphqlEndpoint, token)
// jsonp client
export const restpClient = api =>
  fetchJsonp(`${api}`, v3EndpointOpt).then(r => r.json())
// rest client
/* fetch(`${api}`, v3EndpointOpt).then(r => r.json()) */
export const restClient = api => fetch(`${api}`).then(r => r.text())
