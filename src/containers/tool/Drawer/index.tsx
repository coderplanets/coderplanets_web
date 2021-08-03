/*
 *
 * Preview
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import { useShortcut, useResize } from '@/hooks'

import type { TStore } from './store'

import Viewer from './Viewer/index'
import Content from './Content'

import { useInit, closeDrawer } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Preview')

type TProps = {
  drawer: TStore
}

const DrawerContainer: FC<TProps> = ({ drawer: store }) => {
  const { width: windowWidth } = useResize()
  useInit(store, windowWidth)
  useShortcut('Escape', closeDrawer)

  const {
    slideVisible,
    type,
    attachmentData,
    attUserData,
    mmType,
    rightOffset,
    optionsData,
    canBeClose,
    headerText,
    showHeaderText,
    disableContentDrag,
  } = store

  return (
    <Viewer
      headerText={headerText}
      options={optionsData}
      visible={slideVisible}
      rightOffset={rightOffset}
      type={type}
      canBeClose={canBeClose}
      showHeaderText={showHeaderText}
      disableContentDrag={disableContentDrag}
    >
      <Content
        type={type}
        visible={slideVisible}
        options={optionsData}
        attachment={attachmentData}
        attUser={attUserData}
        mmType={mmType}
      />
    </Viewer>
  )
}

export default pluggedIn(DrawerContainer)
