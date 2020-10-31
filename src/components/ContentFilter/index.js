/*
 *
 * ContentFilter
 *
 */

import React from 'react'

import { useDevice } from '@/hooks'
import { buildLog } from '@/utils'

import DesktopView from './DesktopView'

/* eslint-disable-next-line */
const log = buildLog('c:ContentFilter:index')

const ContentFilter = (props) => {
  const { isMobile } = useDevice()

  return (
    <React.Fragment>{!isMobile && <DesktopView {...props} />}</React.Fragment>
  )
}

export default React.memo(ContentFilter)
