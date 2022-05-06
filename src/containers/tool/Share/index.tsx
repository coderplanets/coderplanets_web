/*
 * Share
 */

import { FC, Fragment } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import { ICON } from '@/config'

import MenuButton from '@/widgets/Buttons/MenuButton'
import IconButton from '@/widgets/Buttons/IconButton'

import { MENU } from './constant'

import Panel from './Panel'

import type { TStore } from './store'
import { useInit, handleMenu } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Share')

type TProps = {
  share?: TStore
  testid?: string
}

const ShareContainer: FC<TProps> = ({ share: store, testid = 'share' }) => {
  useInit(store)
  const { show, offsetLeft, siteShareType, linksData, viewingArticle } = store

  const menuOptions = [
    {
      key: MENU.COPY_LINK,
      icon: `${ICON}/edit/publish-pen.svg`,
      title: '复制链接',
    },
    {
      key: MENU.EMAIL,
      icon: `${ICON}/menu/hot.svg`,
      title: 'Email',
    },
    {
      key: MENU.WECHAT,
      icon: `${ICON}/menu/hot.svg`,
      title: '微信',
      qrLink: linksData.link,
    },
    {
      key: MENU.MORE,
      icon: `${ICON}/menu/hot.svg`,
      title: '更多',
    },
  ]

  return (
    <Fragment>
      <MenuButton placement="bottom" options={menuOptions} onClick={handleMenu}>
        <IconButton
          path="article/share.svg"
          size={15}
          mTop={9}
          mRight={14}
          mLeft={10}
          dimWhenIdle
        />
      </MenuButton>

      {/* TODO: dynamic load */}
      <Panel
        show={show}
        offsetLeft={offsetLeft}
        siteShareType={siteShareType as string}
        linksData={linksData}
        article={viewingArticle}
      />
    </Fragment>
  )
}

export default bond(ShareContainer, 'share') as FC<TProps>
