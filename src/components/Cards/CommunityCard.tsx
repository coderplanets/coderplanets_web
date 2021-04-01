/*
 * cards for job MasonryCards view
 */

import React from 'react'

import type { TCommunity } from '@/spec'
import { cutRest } from '@/utils'

import {
  Wrapper,
  CommunityLogo,
  Info,
  SubsCount,
  Header,
  Title,
  Desc,
} from './styles/community_card'

type TProps = {
  item: TCommunity
}

const CommunityCard: React.FC<TProps> = ({
  item: { id, logo, title, raw, desc, subscribersCount },
}) => {
  return (
    <Wrapper key={id}>
      <Header>
        <CommunityLogo src={logo} />
        <Info>
          <Title href={`/${raw}/posts`}>{title}</Title>
          <SubsCount>{subscribersCount} 人已加入</SubsCount>
        </Info>
      </Header>
      <Desc>{cutRest(desc, 50)}</Desc>
    </Wrapper>
  )
}

export default React.memo(CommunityCard)
