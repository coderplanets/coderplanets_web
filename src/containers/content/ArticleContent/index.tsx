/*
 *
 * PostContent
 *
 */

// import { Fragment } from 'react'

import usePlatform from '@/hooks/usePlatform'

import DesktopView from './DesktopView'
// import MobileView from './MobileView'

const ArticleContent = (props) => {
  const { isMobile } = usePlatform()

  return <DesktopView {...props} />
  // return (
  //   <Fragment>
  //     {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
  //   </Fragment>
  // )
}

export default ArticleContent
