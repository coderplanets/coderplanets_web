/*
 *
 * Content
 *
 */

import React, { useRef } from 'react'

// import { useCustomScroll } from '@hooks'

// import NewsBoard from './NewsBoard'
import ShowcaseList from './ShowcaseList'

import { Wrapper, InnerWrapper } from './styles/content'

const Content = () => {
  const ref = useRef(null)
  // useCustomScroll(ref, { scrollbars: { autoHide: 'never' } })

  return (
    <Wrapper ref={ref}>
      <InnerWrapper>
        {/* <NewsBoard /> */}
        <ShowcaseList />
        <br />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Content
