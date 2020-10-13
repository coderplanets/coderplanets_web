import React from 'react'

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

const Topbar = ({ viewing, fixed, leftOffset, hasNoBottomBorder }) => {
  const { community, activeThread } = viewing

  return (
    <Wrapper
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
      testId="header"
      fixed={fixed}
    >
      <InnerWrapper>
        <TabsWrapper>
          <TabBar
            source={community.threads}
            onChange={console.log}
            active={activeThread}
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

export default React.memo(Topbar)
