import React from 'react'

// import { ICON_CMD } from 'config'
import Tabber from 'components/Tabber'

import {
  Wrapper,
  BannerContentWrapper,
  TabberWrapper,
} from './styles/brief_view'

import { tabberChange } from './logic'

const BriefView = ({ community, activeThread, layout }) => (
  <Wrapper>
    <BannerContentWrapper>
      <TabberWrapper>
        <Tabber
          source={community.threads}
          onChange={tabberChange}
          active={activeThread}
          layout={layout}
          communityRaw={community.raw}
        />
      </TabberWrapper>
    </BannerContentWrapper>
  </Wrapper>
)

export default BriefView
