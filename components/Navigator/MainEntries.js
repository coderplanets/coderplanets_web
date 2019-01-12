import React from 'react'

import { ISSUE_ADDR } from '../../config'
import Popover from '../Popover'
import DiscussLinker from '../DiscussLinker'

import { Wrapper, DotDivider, SiteLink } from './styles/main_entries'

const splitMargin = '8px'
const MainEntries = () => (
  <Wrapper>
    <a href="/home/posts">
      <SiteLink>首页</SiteLink>
    </a>
    <DotDivider space={splitMargin} />
    <a href="/communities">
      <SiteLink>社区</SiteLink>
    </a>
    <DotDivider space={splitMargin} />
    <Popover
      placement="bottom"
      trigger="hover"
      content={<DiscussLinker title="专栏" addr={`${ISSUE_ADDR}/265`} />}
    >
      <SiteLink>专栏</SiteLink>
    </Popover>
    <DotDivider space={splitMargin} />
    <Popover
      placement="bottom"
      trigger="hover"
      content={<DiscussLinker title="团队" addr={`${ISSUE_ADDR}/264`} />}
    >
      <SiteLink>团队</SiteLink>
    </Popover>
  </Wrapper>
)

export default MainEntries
