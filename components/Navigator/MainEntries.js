import React from 'react'
import Link from 'next/link'

import { ISSUE_ADDR } from '@config'
import Popover from '@components/Popover'
import DiscussLinker from '@components/DiscussLinker'

import { Wrapper, DotDivider, SiteLink } from './styles/main_entries'

const splitMargin = '8px'

const MainEntries = ({ curRoute: { mainPath } }) => (
  <Wrapper>
    <Link href="/home/posts" prefetch passHref>
      <SiteLink>首页</SiteLink>
    </Link>
    <DotDivider space={splitMargin} />
    <Link href="/communities" prefetch passHref>
      <SiteLink active={mainPath === 'communities'}>社区</SiteLink>
    </Link>
    <DotDivider space={splitMargin} />
    <Popover
      placement="bottom"
      trigger="click"
      content={<DiscussLinker title="专栏" addr={`${ISSUE_ADDR}/265`} />}
    >
      <SiteLink>专栏</SiteLink>
    </Popover>
    <DotDivider space={splitMargin} />
    <Popover
      placement="bottom"
      trigger="click"
      content={<DiscussLinker title="团队" addr={`${ISSUE_ADDR}/264`} />}
    >
      <SiteLink>团队</SiteLink>
    </Popover>
  </Wrapper>
)

export default MainEntries
