import React from 'react'

// import { ICON_CMD } from '@/config'
import TabBar from '@/components/TabBar'

import {
  Wrapper,
  BannerContentWrapper,
  TabBarWrapper,
} from './styles/brief_view'

import { tabberChange } from './logic'

const BriefView = ({ community, activeThread, layout }) => (
  <Wrapper>
    <BannerContentWrapper>
      <TabBarWrapper>
        <TabBar
          source={community.threads}
          onChange={tabberChange}
          active={activeThread}
          layout={layout}
          communityRaw={community.raw}
        />
      </TabBarWrapper>
    </BannerContentWrapper>
  </Wrapper>
)

export default React.memo(BriefView)
