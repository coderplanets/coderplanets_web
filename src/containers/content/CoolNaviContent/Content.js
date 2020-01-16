/*
 *
 * Content
 *
 */

import React from 'react'

import NewsBar from '@components/NewsBar'
import { Wrapper } from './styles/content'

const Content = () => {
  return (
    <Wrapper>
      <NewsBar title="国外科技动态" numIndex={0} />
      <NewsBar title="国内科技动态" numIndex={1} />
      <NewsBar title="象牙塔" numIndex={2} />
      <NewsBar title="独立博客" numIndex={3} />
      <NewsBar title="播客" numIndex={4} />
    </Wrapper>
  )
}

export default Content
