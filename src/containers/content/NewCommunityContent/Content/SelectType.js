/*
 *
 * Content
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import { ArrowButton } from '@/components/Buttons'
import DemoCommunity from './DemoCommunity'

import COMMUNITY_INTRO from './communityIntros'
// import SearchBox from './SearchBox'
import {
  Wrapper,
  LeftBlock,
  RightBlock,
  Header,
  FaqIcon,
  DemoIcon,
  Title,
  Desc,
  CommunityDemoWrapper,
} from '../styles/content/select_type'

// import { searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:NewCommunitiesContent')

// import { LN } from '../logic'

const SelectType = ({ status: { communityType } }) => {
  if (!communityType) return null
  const intro = COMMUNITY_INTRO[communityType]
  return (
    <Wrapper>
      <LeftBlock>
        <Header>
          <FaqIcon src={`${ICON_CMD}/community_new_question.svg`} />
          <Title>{intro.title}</Title>
        </Header>
        <Desc>{intro.desc}</Desc>
        <br />
        <ArrowButton size="small">了解更多</ArrowButton>
      </LeftBlock>
      <RightBlock>
        <Header>
          <DemoIcon src={`${ICON_CMD}/community_new_demo.svg`} />
          <Title>示例社区</Title>
        </Header>
        <CommunityDemoWrapper>
          {intro.demos.map(item => (
            <DemoCommunity
              key={item.title}
              title={item.title}
              type={item.type}
            />
          ))}
        </CommunityDemoWrapper>
        <ArrowButton size="small">探索更多</ArrowButton>
      </RightBlock>
    </Wrapper>
  )
}

export default React.memo(SelectType)
