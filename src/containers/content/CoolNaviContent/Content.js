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
      <NewsBar title="国外科技动态" />
      <NewsBar title="国内科技动态" />
      <NewsBar title="象牙塔" />
    </Wrapper>
  )
}

export default Content
