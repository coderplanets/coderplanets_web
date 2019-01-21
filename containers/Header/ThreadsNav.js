import React from 'react'

import { Trans } from 'utils'
import { Wrapper, CommunityLogo, MiniTab } from './styles/threads_nav'

import { onThreadChange } from './logic'

const ThreadsNav = ({ activeInfo: { community, activeThread } }) => (
  <Wrapper>
    <CommunityLogo src={community.logo} raw={community.raw} />
    <React.Fragment>
      {community.threads.map(t => (
        <MiniTab
          key={t.raw}
          active={t.raw === activeThread}
          onClick={onThreadChange.bind(this, t)}
        >
          {Trans(t.title)}
        </MiniTab>
      ))}
    </React.Fragment>
  </Wrapper>
)

export default ThreadsNav
