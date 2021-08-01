/*
 *
 * ArticlesFilter
 *
 */

import { Fragment, memo } from 'react'

import usePlatform from '@/hooks/usePlatform'
import { buildLog } from '@/utils/logger'

import DesktopView from './DesktopView'

/* eslint-disable-next-line */
const log = buildLog('c:ArticlesFilter:index')

const ArticlesFilter = (props) => {
  const { isMobile } = usePlatform()
  return <Fragment>{!isMobile && <DesktopView {...props} />}</Fragment>
}

export default memo(ArticlesFilter)
