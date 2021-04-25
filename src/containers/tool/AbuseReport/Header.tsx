import React from 'react'

import { ICON } from '@/config'
import { Wrapper, ReportIcon, Text, ContentTitle } from './styles/header'

const Header = () => {
  return (
    <Wrapper>
      <ReportIcon src={`${ICON}/article/report.svg`} />
      <Text>举报内容</Text>
      <ContentTitle>这是一首简单的小情歌</ContentTitle>
    </Wrapper>
  )
}

export default Header
