import fetchJsonp from 'fetch-jsonp'
import fetch from 'isomorphic-fetch'
/* import { fetch } from 'whatwg-fetch' */
import { graphqlEndpoint } from './config'
import { makeGithubExplore } from '../graphql_helper'

import BStore from '../bstore'

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
