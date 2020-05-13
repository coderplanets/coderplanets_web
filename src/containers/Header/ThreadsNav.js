import React from 'react'

import { Trans } from '@/utils'

import { Tabs } from '@/components/Switcher'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  CommunityLogo,
  MobileHint,
  MiniTab,
} from './styles/threads_nav'

import { onThreadChange } from './logic'

const ThreadsNav = ({ activeInfo: { community, activeThread } }) => {
  return (
    <Wrapper>
      <CommunityLogo src={community.logo} raw={community.raw} />
      <MobileHint>
        <DotDivider />
        {Trans(activeThread)}
      </MobileHint>
      <MiniTab>
        <Tabs
          items={community.threads}
          size="small"
          onChange={onThreadChange}
          activeKey={activeThread}
        />
      </MiniTab>
    </Wrapper>
  )
}

export default React.memo(ThreadsNav)
