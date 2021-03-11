import React from 'react'

import { VIEW } from '@/constant'
import TabBar from '@/components/TabBar'

import TagBlock from './TagBlock'

import {
  Wrapper,
  InnerWrapper,
  TabsWrapper,
  TagWrapper,
} from '../../../styles/top_bar/mobile_view/community_bar'
import { tabOnChange } from '../../../logic'

const CommunityBar = ({ visiable, viewing, leftOffset, hasNoBottomBorder }) => {
  const { community, activeThread } = viewing

  return (
    <Wrapper
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
      testid="modeline-topbar"
      visiable={visiable}
    >
      <InnerWrapper>
        <TabsWrapper>
          <TabBar
            source={community.threads}
            onChange={tabOnChange}
            active={activeThread}
            view={VIEW.MODELINE}
            // layout={layout}
            communityRaw={community.raw}
          />
        </TabsWrapper>
        <TagWrapper>
          <TagBlock />
        </TagWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(CommunityBar)
