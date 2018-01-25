import R from 'ramda'

import { makeDebugger } from '../../utils'
import network from '../../utils/network'
import sr71$ from '../../utils/network/sr71'
import S from './schema'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostsViewer')
/* eslint-enable no-unused-vars */

const CheatsheetCDN =
  'https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master'

class Logic {
  constructor() {
    this.postsViewer = null

    this.sub$ = sr71$.data().subscribe(res => {
      debug('from subscribe')
      if (res.error) return this.handleError(res)
      debug('Logic ret:: ', R.keys(res))
      /* debug('Logic ret:', R.values(res)) */
    })
  }

  init(selectedStore) {
    this.postsViewer = selectedStore
  }

  unInit() {
    this.sub$.unsubscribe()
  }

  cheatsheet = () => {
    const which = 'elixir' // good
    /* const which = 'react' // syntax error */
    // const which = 'whatever' // not found

    const url = `${CheatsheetCDN}/${which}.md`
    debug(url)

    network.GET(url).then(res => {
      if (res.error) return this.handleError(res)
      debug('Logic ret;', R.slice(0, 50, res))

      this.postsViewer.markState({
        networkInited: true,
      })
    })
  }

  // mutation 之后修改 cache
  // https://www.apollographql.com/docs/react/basics/mutations.html
  createPost = () => {
    const variables = {
      username: 'udx2',
      nickname: 'xi2edjiej',
      bio: 'fuckman',
      company: 'infomedia',
    }

    network.mutate(S.createUser, variables).then(res => {
      if (res.error) return this.handleError(res)
      debug('mutate: ', res)
    })
  }

  postList = () => sr71$.query(S.allUser2)

  handleError(res) {
    /* debugger */
    if (res.error === 'GraphQLError') {
      res.details.map(error => {
        debug(`path: ${error.path} : detail: ${error.detail}`)
        return false
      })
      return false
    }
    if (res.error === 'NetworkError') {
      debug(`${res.error}: ${res.details}`)
      return false
    }

    debug('un handleError in ', this.postsViewer)
    debug('un handleError: ', res)
  }

  sr71get = () => {
    const which = 'elixir'
    // const which = 'whatever' // not found
    const url = `${CheatsheetCDN}/${which}.md`
    debug(this.postsViewer)
    sr71$.GET(url)
  }
}

const logic = new Logic()
export default logic
