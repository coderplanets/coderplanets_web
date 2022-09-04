/*
 * Share
 */

import { FC, Fragment, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import type { TSpace } from '@/spec'
import { SVG } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import MenuButton from '@/widgets/Buttons/MenuButton'
import IconButton from '@/widgets/Buttons/IconButton'

import type { TStore } from './store'
import { useInit, handleMenu } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Share')

type TProps = {
  share?: TStore
  size?: number
  offsetLeft?: string
} & TSpace

let Panel = null

const ShareContainer: FC<TProps> = ({
  share: store,
  offsetLeft = 'none',
  ...restProps
}) => {
  useInit(store)

  const { show, menuOptions, siteShareType, linksData, viewingArticle } = store
  const [panelLoad, setPanelLoad] = useState(false)

  useEffect(() => {
    if (show) {
      Panel = dynamic(() => import('./Panel'), { ssr: false })
      setPanelLoad(true)
    }
  }, [show, panelLoad])

  return (
    <Fragment>
      <MenuButton placement="bottom" options={menuOptions} onClick={handleMenu}>
        <IconButton icon={SVG.SHARE} dimWhenIdle {...restProps} />
      </MenuButton>

      {panelLoad && (
        <Panel
          show={show}
          offsetLeft={offsetLeft}
          siteShareType={siteShareType as string}
          linksData={linksData}
          article={viewingArticle}
        />
      )}
    </Fragment>
  )
}

export default bond(ShareContainer, 'share') as FC<TProps>
