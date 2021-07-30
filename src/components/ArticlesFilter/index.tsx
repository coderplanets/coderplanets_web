/*
 *
 * ArticlesFilter
 *
 */

import { Fragment, memo } from 'react'

import { isMobile } from 'react-device-detect'
import { buildLog } from '@/utils'

import DesktopView from './DesktopView'

/* eslint-disable-next-line */
const log = buildLog('c:ArticlesFilter:index')

const ArticlesFilter = (props) => {
  return <Fragment>{!isMobile && <DesktopView {...props} />}</Fragment>
}

export default memo(ArticlesFilter)
