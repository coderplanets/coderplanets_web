/*
 *
 * Content
 *
 */

import { FC, memo } from 'react'

import Link from 'next/link'
import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

import DemoCommunity from './DemoCommunity'
import COMMUNITY_INTRO from './communityIntros'
import type { TSelectTypeStatus } from '../spec'

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
  MoreLink,
} from '../styles/content/select_type'

/* eslint-disable-next-line */
const log = buildLog('C:NewExploreContent')

type TProps = {
  status: TSelectTypeStatus
}

const SelectType: FC<TProps> = ({ status: { communityType } }) => {
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
        <Link href="/explore" passHref>
          <MoreLink>查看详细</MoreLink>
        </Link>
      </LeftBlock>
      <RightBlock>
        <Header>
          <DemoIcon src={`${ICON_CMD}/community_new_demo.svg`} />
          <Title>示例社区</Title>
        </Header>
        <CommunityDemoWrapper>
          {intro.demos.map((item) => (
            <DemoCommunity key={item.raw} item={item} />
          ))}
        </CommunityDemoWrapper>

        <Link href="/explore" passHref>
          <MoreLink>查看更多</MoreLink>
        </Link>
      </RightBlock>
    </Wrapper>
  )
}

export default memo(SelectType)
