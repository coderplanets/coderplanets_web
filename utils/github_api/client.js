import fetchJsonp from 'fetch-jsonp'
import { makeGithubExplore } from '../graphql_helper'

import { graphqlEndpoint } from './config'
import BStore from '../bstore'

const token = BStore.get('github_token')

const v3EndpointOpt = {
  headers: { Authorization: `token ${token}` },
}

export const graphqlClient = makeGithubExplore(graphqlEndpoint, token)
export const restClient = api =>
  fetchJsonp(`${api}`, v3EndpointOpt).then(r => r.json())
