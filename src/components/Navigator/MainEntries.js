import React from 'react'
import Link from 'next/link'

import { ICON_CMD } from '@config'
import { ROUTE } from '@constant'
import Popover from '@components/Popover'

import MoreContent from './MoreContent'
import { Wrapper, DotDivider, SiteLink, Icon } from './styles/main_entries'

const splitMargin = '7px'

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
    {/* <DotDivider space={splitMargin} />
    <SiteLink>专栏</SiteLink> */}
    <DotDivider space={splitMargin} />
    <Link href={`/${ROUTE.ACTIVITIES}`} passHref>
      <SiteLink active={mainPath === ROUTE.ACTIVITIES}>活动</SiteLink>
    </Link>
    <DotDivider space={splitMargin} />
    <SiteLink>小周边</SiteLink>
    {/* <Popover
      placement="bottom"
      trigger="click"
      content={<DiscussLinker title="专栏" addr={`${ISSUE_ADDR}/265`} />}
    >
      <SiteLink>专栏</SiteLink>
    </Popover> */}
    <DotDivider space={splitMargin} />
    <Link href={`/${ROUTE.COOL_NAVI}`} passHref>
      <SiteLink
        active={mainPath === ROUTE.COOL_NAVI}
        testid={`header-${ROUTE.COOL_NAVI}`}
      >
        酷导航
      </SiteLink>
    </Link>
    <DotDivider space={splitMargin} />
    <Link href={`/${ROUTE.HAVE_A_DRINK}`} passHref>
      <SiteLink
        active={mainPath === ROUTE.HAVE_A_DRINK}
        testid={`header-${ROUTE.HAVE_A_DRINK}`}
      >
        来一杯
      </SiteLink>
    </Link>
    <DotDivider space={splitMargin} />
    <Popover content={<MoreContent />} placement="bottom" trigger="click">
      <SiteLink>
        更多 <Icon src={`${ICON_CMD}/arrow_down.svg`} />
      </SiteLink>
    </Popover>
  </Wrapper>
)

export default MainEntries
