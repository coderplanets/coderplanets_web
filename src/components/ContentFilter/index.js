/*
 *
 * ContentFilter
 *
 */

import React from 'react'

import { buildLog, isMobile } from '@/utils'

import DesktopView from './DesktopView'

/* eslint-disable-next-line */
const log = buildLog('c:ContentFilter:index')

const ContentFilter = (props) => {
  return (
    <React.Fragment>{!isMobile && <DesktopView {...props} />}</React.Fragment>
  )
}

export default React.memo(ContentFilter)
