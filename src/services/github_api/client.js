import { BStore, makeGithubExplore } from '@/utils'
import { graphqlEndpoint } from './config'

const token = BStore.get('github_token')

const rawOptions = {
  headers: {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.VERSION.raw',
    'Content-Type': 'application/vnd.github.VERSION.raw',
  },
}

const jsonOptions = {
  headers: {
    Authorization: `token ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

// graphql client
export const graphqlClient = makeGithubExplore(graphqlEndpoint, token)

export const restClient = (api, fmt = 'default') => {
  switch (fmt) {
    case 'json': {
      return fetch(`${api}`, jsonOptions).then(r => r.json())
    }
    case 'raw': {
      return fetch(`${api}`, rawOptions).then(r => r.text())
    }
    default: {
      return fetch(`${api}`).then(r => r.text())
    }
  }
}
