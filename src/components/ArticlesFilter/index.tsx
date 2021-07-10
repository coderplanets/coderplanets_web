/*
 *
 * ArticlesFilter
 *
 */

import { Fragment, memo } from 'react'

import { useDevice } from '@/hooks'
import { buildLog } from '@/utils'

import DesktopView from './DesktopView'

/* eslint-disable-next-line */
const log = buildLog('c:ArticlesFilter:index')

const ArticlesFilter = (props) => {
  const { isMobile } = useDevice()

  return <Fragment>{!isMobile && <DesktopView {...props} />}</Fragment>
}

export default memo(ArticlesFilter)
