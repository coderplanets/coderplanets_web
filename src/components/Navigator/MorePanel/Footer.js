import React from 'react'
import Link from 'next/link'

import { ICON, GITHUB } from '@/config'
import { ROUTE } from '@/constant'

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
    <Entry>
      <Logo src={`${ICON}/menu/sponsor.svg`} />
      <Intro>
        <Link href={`/${ROUTE.SPONSOR}`} passHref>
          <Title>赞助与广告</Title>
        </Link>
        <Desc>赞助社区，广告投放..</Desc>
      </Intro>
      <Notice>诚邀赞助</Notice>
    </Entry>
    <Entry>
      <Logo src={`${ICON}/menu/feedback.svg`} />
      <Intro>
        <Title>建议与反馈</Title>
        <Desc>使用过程中遇到的任何问题和建议请来这里</Desc>
      </Intro>
    </Entry>
    <Entry>
      <Logo src={`${ICON}/menu/github.svg`} />
      <Intro>
        <Link href={`/${GITHUB}`} passHref>
          <Title>Open Source</Title>
        </Link>
        <Desc>本站全部代码开源在 Github 上，欢迎参与</Desc>
      </Intro>
    </Entry>
  </Wrapper>
)

export default React.memo(MoreContent)
