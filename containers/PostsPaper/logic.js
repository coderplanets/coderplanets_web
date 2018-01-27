// import R from 'ramda'
import { makeDebugger, dispatchEvent, EVENT, ERR, TYPE } from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'

const sr71$ = new SR71()
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostsPaper')
/* eslint-enable no-unused-vars */

const CheatsheetCDN =
  'https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master'

let postsPaper = null

export function cheatsheet() {
  //  const which = 'elixir'
  // const which = 'whatever6' // not found
  const which = 'elixir'
  const url = `${CheatsheetCDN}/${which}.md`
  sr71$.restGet(url)
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

export function filterOnSelect(key, val) {
  postsPaper.selectFilter(key, val)
}

export function tagOnSelect(obj) {
  debug('tagOnSelect: ', obj)
  postsPaper.selectTag(obj)

  postsPaper.markState({
    curView: 'LOADING',
  })
  setTimeout(() => {
    postsPaper.markState({
      curView: 'RESULT',
    })
  }, 2000)
}

export const postList = () => {
  const variables = {
    /* first: 4, */
    filter: {
      first: 5,
      sort: 'MOST_STARS',
    },
  }
  sr71$.query(S.posts, variables)
}

// 'GraphQLError':
// 'NetworkError'
function handleError(res) {
  switch (res.error) {
    case ERR.PARSE_CRAPHQL:
      res.details.map(error => {
        debug(`path: ${error.path} : detail: ${error.detail}`)
        return false
      })
      return false
    case ERR.NETWORK:
      debug(`${res.error}: ${res.details}`)
      return false
    case ERR.NOT_FOUND:
      debug(`${res.error}: ${res.details}`)
      return false

    case ERR.TIMEOUT:
      debug(`${res.error}: ${res.details}`)
      // sr71$.stop()
      return false

    default:
      debug('un handleError in ', postsPaper)
      debug('un handleError: ', res)
  }
}

export function onContentSelect(post) {
  debug('onContentSelect publish ')
  // PubSub.publish('hello', post)
  // dispatchEvent(EVENT.PREVIEW, { type: TYPE.PREVIEW_POST, data: post })
  dispatchEvent(EVENT.NAV_EDIT, { type: TYPE.PREVIEW_POST, data: post })
}

export function createContent() {
  debug('onContentSelect createContent ')
  dispatchEvent(EVENT.NAV_CREATE_POST, { type: TYPE.PREVIEW_CREATE_POST })
}

export function init(selectedStore) {
  postsPaper = selectedStore
  debug('@@@ init @@@i')
  sr71$.data().subscribe(res => {
    if (res.error) return handleError(res)
    debug('Logic ret: ', res)
  })
}
