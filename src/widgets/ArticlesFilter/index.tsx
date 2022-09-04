/*
 *
 * ArticlesFilter
 *
 */

import { Fragment, memo } from 'react'
import { isMobile } from 'react-device-detect'

import { buildLog } from '@/utils/logger'

import DesktopView from './DesktopView'

/* eslint-disable-next-line */
const log = buildLog('w:ArticlesFilter:index')

const ArticlesFilter = (props) => {
  return <Fragment>{!isMobile && <DesktopView {...props} />}</Fragment>
}

export default memo(ArticlesFilter)
