import React, { useEffect, useRef } from 'react'

import CustomScroller from '@/components/CustomScroller'

import renderContent from './renderContent'
import { Wrapper } from '../styles/content'

const Content = ({ visible, type, attachment, attUser }) => {
  const ref = useRef(null)

  /*
   * reset when content visible
   * scroll to top always
   */
  useEffect(() => {
    if (visible && ref?.current) {
      ref.current.scrollIntoView()
    }
  }, [visible, ref])

  return (
    <Wrapper>
      <CustomScroller direction="vertical" height="100vh" shadowSize="small">
        <div>{renderContent(type, attachment, attUser)}</div>
      </CustomScroller>
    </Wrapper>
  )
}

export default React.memo(Content)
