/*
 * Share store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import { SITE_URL_SHORT } from '@/config'
import { SVG, THREAD } from '@/constant'

import type {
  TArticle,
  TCommunity,
  TRootStore,
  TThread,
  TMenuOption,
} from '@/spec'

import { markStates, toJS } from '@/utils/mobx'
import { buildLog } from '@/utils/logger'

import type { TLinksData, TShareData } from './spec'
import { SITE_SHARE_TYPE, MENU } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:Share')

const Share = T.model('Share', {
  show: T.optional(T.boolean, false),
  siteShareType: T.optional(
    T.enumeration(values(SITE_SHARE_TYPE)),
    SITE_SHARE_TYPE.LINKS,
  ),
})
  .views((self) => ({
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewing.viewingArticle
    },
    get viewingThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.viewingThread
    },
    get shareData(): TShareData {
      const slf = self as TStore

      const { linksData } = slf
      const articleTitle = slf.viewingArticle.title
      const articleDigest = slf.viewingArticle.digest

      return {
        url: linksData.link,
        title: articleTitle,
        digest: articleDigest,
      }
    },
    get linksData(): TLinksData {
      const slf = self as TStore

      const articleId = slf.viewingArticle.id
      const articleTitle = slf.viewingArticle.title
      const thread =
        slf.viewingArticle.meta?.thread.toLowerCase() || THREAD.POST

      const link = `${SITE_URL_SHORT}/${thread}/${articleId}`

      return {
        link,
        html: `<a href="${link}">${articleTitle}</a>`,
        md: `[${articleTitle}](${link})`,
        orgMode: `[[${link}][${articleTitle}]]`,
      }
    },
    get menuOptions(): TMenuOption[] {
      const slf = self as TStore
      const { linksData } = slf

      return [
        {
          key: MENU.COPY_LINK,
          icon: SVG.COPY,
          title: '复制地址',
        },
        {
          key: MENU.EMAIL,
          icon: SVG.EMAIL,
          title: 'Email',
        },
        {
          key: MENU.QR_CODE,
          icon: SVG.QR_CODE,
          title: '二维码',
          qrLink: linksData.link,
        },
        {
          key: MENU.MORE,
          icon: SVG.MOREL_DOT,
          title: '更多',
        },
      ]
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof Share>

export default Share
