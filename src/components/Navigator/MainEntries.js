import React from 'react'
import Link from 'next/link'

// import { ISSUE_ADDR } from '@config'

// import Popover from '@components/Popover'
// import DiscussLinker from '@components/DiscussLinker'

import { ROUTE } from '@constant'

import { Wrapper, DotDivider, SiteLink } from './styles/main_entries'

const splitMargin = '8px'

const MainEntries = ({ curRoute: { mainPath } }) => (
  <Wrapper>
    {/* <Link href="/home/posts" passHref>
      <SiteLink testid="header-home-link">首页</SiteLink>
    </Link> */}
    {/* <DotDivider space={splitMargin} /> */}
    <Link href="/communities" passHref>
      <SiteLink
        active={mainPath === 'communities'}
        testid="header-communities-link"
      >
        社区
      </SiteLink>
    </Link>
    <DotDivider space={splitMargin} />
    <SiteLink>专栏</SiteLink>
    <DotDivider space={splitMargin} />
    <SiteLink>活动</SiteLink>
    <DotDivider space={splitMargin} />
    <SiteLink>周边</SiteLink>
    {/* <Popover
      placement="bottom"
      trigger="click"
      content={<DiscussLinker title="专栏" addr={`${ISSUE_ADDR}/265`} />}
    >
      <SiteLink>专栏</SiteLink>
    </Popover> */}
    <DotDivider space={splitMargin} />
    <SiteLink>酷导航</SiteLink>
    {/* <Popover
      placement="bottom"
      trigger="click"
      content={<DiscussLinker title="团队" addr={`${ISSUE_ADDR}/264`} />}
    >
      <SiteLink>团队</SiteLink>
    </Popover> */}
    <DotDivider space={splitMargin} />
    <Link href={`/${ROUTE.HAVE_A_DRINK}`} passHref>
      <SiteLink
        active={mainPath === ROUTE.HAVE_A_DRINK}
        testid="header-have-a-drink-link"
      >
        来一杯
      </SiteLink>
    </Link>
  </Wrapper>
)

export default MainEntries
