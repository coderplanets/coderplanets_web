//

/*
 *
 * ModeLine
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'
import dynamic from 'next/dynamic'

import { useMedia } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import TopBar from './TopBar'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

let BottomBar = null

const ModeLineContainer = ({ modeLine: store }) => {
  useInit(store)
  const { showTop, viewing, activeMenu } = store
  // viewing: { community, activeThread },

  const { mobile } = useMedia()

  useEffect(() => {
    // only load BottomBar on mobile view
    BottomBar = dynamic(() => import('./BottomBar'), { ssr: false })
  }, [mobile])

  return (
    <React.Fragment>
      <TopBar visiable={showTop} viewing={viewing} />
      {BottomBar && mobile && <BottomBar activeMenu={activeMenu} />}
    </React.Fragment>
  )
}

ModeLineContainer.propTypes = {
  modeLine: T.any.isRequired,
}

ModeLineContainer.defaultProps = {}

export default connectStore(ModeLineContainer)
