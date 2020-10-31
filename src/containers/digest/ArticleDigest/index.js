/*
 *
 * ArticleDigest
 *
 */

import React from 'react'

import { useMedia } from '@/hooks'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const ArticleDigestContainer = (props) => {
  const { mobile } = useMedia()
  console.log('ArticleDigest mobile: ', mobile)

  return (
    <React.Fragment>
      {mobile ? <MobileView {...props} /> : <DesktopView {...props} />}
    </React.Fragment>
  )
}

export default ArticleDigestContainer
