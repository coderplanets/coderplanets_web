import React from 'react'

import { Wrapper, CommunityLogo, MiniTab } from './styles/threads_nav'

import { uid, Trans } from '../../utils'
import { onThreadChange } from './logic'

const ThreadsNav = ({ activeInfo: { community, activeThread } }) => (
  <Wrapper>
    <CommunityLogo src={community.logo} />
    <React.Fragment>
      {community.threads.map(t => (
        <MiniTab
          key={uid.gen()}
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
