import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog, asyncSuit } from '@/utils'
import { EVENT } from '@/constant'
import { SHARE_TYPE } from './constant'

// import S from './schma'
import type { TStore } from './store'

const { SR71, $solver, asyncRes } = asyncSuit

const sr71$ = new SR71({
  receive: EVENT.SHARE,
})

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:Share')

type TShareParam = {
  url?: string
  title?: string
  text?: string
  subject?: string
  body?: string
}
const openShareWindow = (platformUrl: string, param: TShareParam): void => {
  const safeParam = []

  /* eslint-disable */
  for (const i in param) {
    safeParam.push(`${i}=${encodeURIComponent(param[i] || '')}`)
  }
  /* eslint-enable */
  const targetUrl = `${platformUrl}?${safeParam.join('&')}`

  window.open(targetUrl, '_blank', 'height=500, width=600')
}

export const toPlatform = (type: string): void => {
  const { shareData } = store
  const { url, title, digest } = shareData

  switch (type) {
    case SHARE_TYPE.TWITTER: {
      const param = { url, text: title }

      return openShareWindow('https://twitter.com/intent/tweet', param)
      // return openShareWindow('https://twitter.com/share', param)
    }

    case SHARE_TYPE.TELEGRAM: {
      const param = { url, text: title }

      return openShareWindow('https://telegram.me/share/url', param)
    }

    case SHARE_TYPE.EMAIL: {
      const param = { subject: title, body: `${url}\n\n${digest}` }
      return openShareWindow('mailto:', param)
    }

    case SHARE_TYPE.FACEBOOK: {
      const param = { url, title }
      return openShareWindow('https://facebook.com/sharer/sharer.php', param)
    }

    case SHARE_TYPE.WEIBO: {
      const param = { url, title }
      return openShareWindow('https://service.weibo.com/share/share.php', param)
    }

    default: {
      return store.mark({ siteShareType: type })
    }
  }
}

export const close = (): void => {
  store.mark({ show: false })
}

// ###############################
// init & uninit handlers
// ###############################

const DataResolver = [
  {
    match: asyncRes(EVENT.SHARE),
    action: () => store.mark({ show: true }),
  },
]

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store

    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataResolver, []))
    }

    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
