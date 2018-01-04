// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'
import network from '../../utils/network'
import S from './schema'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostsViewer')
/* eslint-enable no-unused-vars */

let postsViewer = null

function handleError(res) {
  debug(`handleError [ ${res.error}]: ${res.details}`)
}

// mutation 之后修改 cache
// https://www.apollographql.com/docs/react/basics/mutations.html
export function createPost() {
  const variables = {
    username: 'seifefefefen',
    nickname: 'xi2e',
    bio: 'fuckman',
    company: 'infomedia',
  }

  network.mutate(S.createUser, variables).then(res => {
    if (res.error) return handleError(res)
    debug('mutate: ', res)
  })
}

export function postList() {
  network.query(S.allUser2).then(res => {
    if (res.error) return handleError(res)
    debug('query: ', res)
  })
}

const CheatsheetCDN =
  'https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master'
export function cheatsheet() {
  // const which = 'elixir' // good
  /* const which = 'react' // syntax error */
  const which = 'whatever' // not found

  const url = `${CheatsheetCDN}/${which}.md`
  debug(url)

  network.GET(url).then(res => {
    /* if (res.error) return handleError(res) */
    debug('GET ', res)
  })
}

export function init(selectedStore) {
  postsViewer = selectedStore
  debug(postsViewer)
}
