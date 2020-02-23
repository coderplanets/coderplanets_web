/*
 *
 * Content
 *
 */

import React, { useRef } from 'react'

// import { useCustomScroll } from '@hooks'

// import NewsBoard from './NewsBoard'
import NormalList from './NormalList'

import { Wrapper, InnerWrapper } from './styles/content'

const Content = () => {
  const ref = useRef(null)
  // useCustomScroll(ref, { scrollbars: { autoHide: 'never' } })

  return (
    <Wrapper ref={ref}>
      <InnerWrapper>
        {/* <NewsBoard /> */}
        <NormalList />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Content
