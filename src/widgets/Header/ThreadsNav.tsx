import { FC, memo } from 'react'

import type { TCommunity, TThread } from '@/spec'
import { Trans } from '@/utils/i18n'

// import { Tabs } from '@/widgets/Switcher'
import DotDivider from '@/widgets/DotDivider'

import {
  Wrapper,
  CommunityLogo,
  MobileHint,
  MiniTab,
} from './styles/threads_nav'

// import { onThreadChange } from './logic'

type TProps = {
  activeInfo: {
    community: TCommunity
    activeThread: TThread
  }
}

const ThreadsNav: FC<TProps> = ({
  activeInfo: { community, activeThread },
}) => {
  return (
    <Wrapper>
      <CommunityLogo src={community.logo || ''} raw={community.raw} />
      <MobileHint>
        <DotDivider />
        {Trans(activeThread)}
      </MobileHint>
      <MiniTab>
        todo
        {/* <Tabs
          size={SIZE.SMALL}
          items={community.threads}
          onChange={onThreadChange}
          activeKey={activeThread}
        /> */}
      </MiniTab>
    </Wrapper>
  )
}

export default memo(ThreadsNav)
