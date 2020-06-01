import React from 'react'
import Link from 'next/link'

import { ICON_CMD, GITHUB } from '@/config'
import { ROUTE } from '@/constant'

// import Tooltip from '@/components/Tooltip'
// import DiscussLinker from '@/components/DiscussLinker'

import {
  Wrapper,
  Entry,
  Logo,
  Intro,
  Title,
  Desc,
  Notice,
} from '../styles/more_panel/footer'

const MoreContent = () => (
  <Wrapper>
    <Link href={`/${ROUTE.SPONSOR}`} passHref>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_sponsor.svg`} />
        <Intro>
          <Title>赞助与广告</Title>
          <Desc>赞助社区，广告投放..</Desc>
        </Intro>
        <Notice>诚邀赞助</Notice>
      </Entry>
    </Link>
    <Entry>
      <Logo src={`${ICON_CMD}/header/more_support.svg`} />
      <Intro>
        <Title>社区支持</Title>
        <Desc>使用过程中遇到的任何问题和建议请来这里</Desc>
      </Intro>
    </Entry>
    <Link href={`/${GITHUB}`} passHref>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_github.svg`} />
        <Intro>
          <Title>Open Source</Title>
          <Desc>本站全部代码开源在 Github 上，欢迎参与</Desc>
        </Intro>
      </Entry>
    </Link>
  </Wrapper>
)

export default React.memo(MoreContent)
