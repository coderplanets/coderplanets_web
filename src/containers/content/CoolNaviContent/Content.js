/*
 *
 * Content
 *
 */

import React, { useRef } from 'react'

import { useCustomScroll } from '@hooks'

import NewsBar from '@components/NewsBar'
import { Wrapper, InnerWrapper } from './styles/content'

const Content = () => {
  const ref = useRef(null)
  useCustomScroll(ref, { scrollbars: { autoHide: 'never' } })

  return (
    <Wrapper ref={ref}>
      <InnerWrapper>
        <NewsBar title="国外科技动态" numIndex={0} />
        <NewsBar title="国内科技动态" numIndex={1} />
        <NewsBar title="象牙塔" numIndex={2} />
        <NewsBar title="独立博客" numIndex={3} />
        <NewsBar title="播客" numIndex={4} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Content
