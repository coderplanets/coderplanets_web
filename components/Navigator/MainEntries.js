import React from 'react'

import Popover from '../Popover'
import DiscussLinker from '../DiscussLinker'

import { Wrapper, DotDivider, SiteLink } from './styles/main_entries'

const MainEntries = () => (
  <Wrapper>
    <SiteLink>首页</SiteLink>
    <DotDivider />
    <SiteLink>社区</SiteLink>
    <DotDivider />
    <Popover
      placement="bottom"
      trigger="click"
      content={
        <DiscussLinker
          title="专栏"
          addr="https://github.com/coderplanets/coderplanets_web/issues/265"
        />
      }
    >
      <SiteLink>专栏</SiteLink>
    </Popover>
    <DotDivider />
    <Popover
      placement="bottom"
      trigger="click"
      content={
        <DiscussLinker
          title="团队"
          addr="https://github.com/coderplanets/coderplanets_web/issues/264"
        />
      }
    >
      <SiteLink>团队</SiteLink>
    </Popover>
  </Wrapper>
)

export default MainEntries
