/*
 *
 * ContentFilter
 *
 */

import React from 'react'

import { buildLog } from '@/utils'
import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'

/* eslint-disable-next-line */
const log = buildLog('c:ContentFilter:index')

const ContentFilter = (props) => {
  const { mobile } = useMedia()

  return (
    <React.Fragment>{!mobile && <DesktopView {...props} />}</React.Fragment>
  )
}

export default React.memo(ContentFilter)
