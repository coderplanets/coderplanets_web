import { FC, memo } from 'react'

import { ICON_BASE } from '@/config'

import {
  Wrapper,
  BadgeWrapper,
  Logo,
  Intro,
  PubHint,
  Title,
  ChangeBtn,
  ArrowLogo,
} from './styles/community_badge'

const CommunityBadge: FC = () => {
  return (
    <Wrapper>
      <BadgeWrapper>
        <Intro>
          <PubHint>发布到子社区:</PubHint>
          <Title>
            <Logo src={`${ICON_BASE}/pl/javascript.png`} />
            <div>JavaScript</div>
            <ChangeBtn>
              更换 <ArrowLogo />
            </ChangeBtn>
          </Title>
        </Intro>
      </BadgeWrapper>
    </Wrapper>
  )
}

export default memo(CommunityBadge)
