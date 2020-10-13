import React from 'react'

import { VIEW } from '@/constant'
import TabBar from '@/components/TabBar'

import TagBlock from './TagBlock'

import {
  Wrapper,
  InnerWrapper,
  TabsWrapper,
  TagWrapper,
} from '../styles/top_bar'

// different view has different size
// const METRIC_MAP = {
//   default: {
//     maxWidth: cs.MAX_CONTENT_WIDTH,
//     padding: '0 6vw',
//   },

//   article: {
//     maxWidth: cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH,
//     padding: '0 5vw',
//   },
// }

const DesktopView = ({ visiable, viewing, leftOffset, hasNoBottomBorder }) => {
  const { community, activeThread } = viewing

  // console.log('DesktopView topbar hello: ', visiable)

  return (
    <Wrapper
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
      testId="modeline-topbar"
      visiable={visiable}
    >
      <InnerWrapper>
        <TabsWrapper>
          <TabBar
            source={community.threads}
            onChange={console.log}
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

export default React.memo(DesktopView)
