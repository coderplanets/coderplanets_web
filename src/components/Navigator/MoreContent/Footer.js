import React from 'react'
// import Link from 'next/link'

import { ICON_CMD } from '@config'

// import Popover from '@components/Popover'
// import DiscussLinker from '@components/DiscussLinker'

// import { ROUTE } from '@constant'
import {
  Wrapper,
  Entry,
  Logo,
  Intro,
  Title,
  Desc,
} from '../styles/more_content/footer'

const MoreContent = () => (
  <Wrapper>
    <Entry>
      <Logo src={`${ICON_CMD}/header/more_support.svg`} />
      <Intro>
        <Title>社区支持</Title>
        <Desc>使用过程中遇到的任何问题和建议请来这里</Desc>
      </Intro>
    </Entry>
    <Entry>
      <Logo src={`${ICON_CMD}/header/more_files.svg`} />
      <Intro>
        <Title>开发文档</Title>
        <Desc>文档概览，API 使用</Desc>
      </Intro>
    </Entry>
    <Entry>
      <Logo src={`${ICON_CMD}/header/more_github.svg`} />
      <Intro>
        <Title>Open Source</Title>
        <Desc>本站全部代码开源在 Github 上，欢迎参与</Desc>
      </Intro>
    </Entry>
  </Wrapper>
)

export default MoreContent
