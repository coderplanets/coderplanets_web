/*
 *
 * Content
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { ArrowButton } from '@components/FancyButtons'
import DemoCommunity from './DemoCommunity'
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

const SelectType = ({ communityType }) => {
  return (
    <Wrapper>
      {communityType && (
        <React.Fragment>
          <LeftBlock>
            <Header>
              <FaqIcon src={`${ICON_CMD}/community_new_question.svg`} />
              <Title>标准型社区</Title>
            </Header>
            <Desc>
              编程语言，编程框架，基础设施等通用等领域的社区,
              包含帖子，周报，导航，小技巧，wiki，地图，酷团队，招聘等频道。社区成员共同管理。
            </Desc>
            <br />
            <ArrowButton size="small">了解更多</ArrowButton>
          </LeftBlock>
          <RightBlock>
            <Header>
              <DemoIcon src={`${ICON_CMD}/community_new_demo.svg`} />
              <Title>示例社区</Title>
            </Header>
            <CommunityDemoWrapper>
              <DemoCommunity title="javascript" />
              <DemoCommunity title="react" type="framework" />
              <DemoCommunity title="phoenix" type="framework" />
              <DemoCommunity title="elixir" />
              <DemoCommunity title="nim" />
            </CommunityDemoWrapper>
            <ArrowButton size="small">探索更多</ArrowButton>
          </RightBlock>
        </React.Fragment>
      )}
    </Wrapper>
  )
}

export default SelectType
