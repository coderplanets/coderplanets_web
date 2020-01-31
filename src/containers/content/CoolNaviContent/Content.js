/*
 *
 * Content
 *
 */

import React, { useRef } from 'react'

import { useCustomScroll } from '@hooks'

import FeedsBar from '@components/FeedsBar'
import { Wrapper, InnerWrapper } from './styles/content'

const Content = () => {
  const ref = useRef(null)
  useCustomScroll(ref, { scrollbars: { autoHide: 'never' } })

  return (
    <Wrapper ref={ref}>
      <InnerWrapper>
        <FeedsBar title="国外社区动态" numIndex={0} />
        <FeedsBar title="国内社区动态" numIndex={1} />
        <FeedsBar title="象牙塔" numIndex={2} />
        <FeedsBar title="独立博客" numIndex={3} />
        <FeedsBar title="团队博客" numIndex={4} />
        <FeedsBar title="播客" numIndex={5} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Content
