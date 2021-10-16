import { FC, memo } from 'react'

import {
  Wrapper,
  BadgeWrapper,
  Intro,
  PubHint,
  Title,
  ChangeBtn,
} from './styles/community_badge'

const CommunityBadge: FC = () => {
  return (
    <Wrapper>
      <BadgeWrapper>
        <Intro>
          <PubHint>发布到</PubHint>
          <Title>JavaScript</Title>
          <ChangeBtn>更换社区</ChangeBtn>
        </Intro>
      </BadgeWrapper>
    </Wrapper>
  )
}

export default memo(CommunityBadge)
