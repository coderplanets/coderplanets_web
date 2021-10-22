import React from 'react'

import { VIEW, SIZE } from '@/constant'
import TabBar from '@/widgets/TabBar'

import {
  Wrapper,
  InnerWrapper,
  TabsWrapper,
} from '../styles/top_bar/desktop_view'

import { tabOnChange } from '../logic'

const DesktopView = ({ visible, viewing, leftOffset, hasNoBottomBorder }) => {
  const { community, activeThread } = viewing

  return (
    <Wrapper
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
      testid="modeline-topbar"
      visible={visible}
    >
      <InnerWrapper>
        <TabsWrapper>
          <TabBar
            source={community.threads}
            onChange={tabOnChange}
            active={activeThread}
            view={VIEW.DESKTOP}
            // layout={layout}
            communityRaw={community.raw}
            size={SIZE.SMALL}
          />
        </TabsWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(DesktopView)
