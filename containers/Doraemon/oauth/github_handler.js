import { Global, getQueryFromUrl } from '../../../utils'

import oauthPopup from './oauth_window'
import S from '../schema'

const githubLoginHandler = (store, sr71$) => {
  const clientId = process.env.GITHUB_CLIENT_ID
  const info = 'from_github'
  // TODO: prettify signin page
  const cb = 'https://www.coderplanets.com/oauth'
  const github = 'https://github.com/login/oauth/authorize'
  const url = `${github}?client_id=${clientId}&state=${info}&redirect_uri=${cb}`

  oauthPopup(url)

  Global.addEventListener('message', e => {
    if (e.origin === Global.location.origin) {
      if (e.data.from_oauth_window) {
        const code = getQueryFromUrl('code', e.data.from_oauth_window)

        store.toast('info', { title: '正在验证', msg: '请稍等。' })
        sr71$.mutate(S.githubSignin, { code })
        Global.postMessage({ from_parent: true }, Global.location.href)
      }
    }
  })
}

export default githubLoginHandler
