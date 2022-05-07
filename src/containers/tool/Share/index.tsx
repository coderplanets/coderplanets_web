/*
 * Share
 */

import { FC, Fragment } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import { TSpace } from '@/spec'
import { SVG } from '@/constant'

import MenuButton from '@/widgets/Buttons/MenuButton'
import IconButton from '@/widgets/Buttons/IconButton'

import Panel from './Panel'

import type { TStore } from './store'
import { useInit, handleMenu } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Share')

type TProps = {
  share?: TStore
  testid?: string
  size?: number
  offsetLeft?: string
} & TSpace

const ShareContainer: FC<TProps> = ({
  share: store,
  testid = 'share',
  offsetLeft = 'none',
  ...restProps
}) => {
  useInit(store)

  const { show, menuOptions, siteShareType, linksData, viewingArticle } = store

  return (
    <Fragment>
      <MenuButton placement="bottom" options={menuOptions} onClick={handleMenu}>
        <IconButton icon={SVG.SHARE} dimWhenIdle {...restProps} />
      </MenuButton>

      {/* TODO: dynamic condition load */}
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
