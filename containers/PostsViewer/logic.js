// import R from 'ramda'
import { makeDebugger } from '../../utils/functions'
import sr71$ from '../../utils/network/sr71'
import S from './schema'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostsViewer')
/* eslint-enable no-unused-vars */

const CheatsheetCDN =
  'https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master'

let postsViewer = null
let sub$ = null

export function cheatsheet() {
  //  const which = 'elixir'
  const which = 'whatever6' // not found
  const url = `${CheatsheetCDN}/${which}.md`
  sr71$.restGet(url)
  postList()
}

export function createPost() {
  const variables = {
    username: 'udx2',
    nickname: 'xi2edjiej',
    bio: 'fuckman',
    company: 'infomedia',
  }

  sr71$.mutate(S.createUser, variables)
}

export const postList = () => sr71$.query(S.allUser2)

function handleError(res) {
  switch (res.error) {
    case 'GraphQLError':
      res.details.map(error => {
        debug(`path: ${error.path} : detail: ${error.detail}`)
        return false
      })
      return false
    case 'NetworkError':
      debug(`${res.error}: ${res.details}`)
      return false
    case 'NotFound':
      debug(`${res.error}: ${res.details}`)
      return false

    case 'TimeoutError':
      debug(`${res.error}: ${res.details}`)
      // sr71$.stop()
      return false

    default:
      debug('un handleError in ', postsViewer)
      debug('un handleError: ', res)
  }
}

export function init(selectedStore) {
  postsViewer = selectedStore
  debug(postsViewer)
  sub$ = sr71$.data().subscribe(res => {
    if (res.error) return handleError(res)
    debug('Logic ret: ', res)
  })
}

export function unInit() {
  // avoid the duplicate subscribe caused by HMR
  sub$.unsubscribe()
}
