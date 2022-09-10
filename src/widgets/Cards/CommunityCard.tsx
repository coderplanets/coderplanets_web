/*
 * cards for job MasonryCards view
 */

import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { cutRest } from '@/utils/helper'

import DotDivider from '@/widgets/DotDivider'
import {
  Wrapper,
  CommunityLogo,
  Info,
  SubInfo,
  SubsInfo,
  UserIcon,
  UserCount,
  Header,
  Title,
  Raw,
  Desc,
} from './styles/community_card'

type TProps = {
  item: TCommunity
}

const CommunityCard: FC<TProps> = ({ item: { logo, title, raw, desc } }) => {
  return (
    <Wrapper key={raw}>
      <Header>
        <CommunityLogo src={logo} raw={raw} />
        <Info>
          <Title>{title}</Title>
          <SubInfo>
            <Raw href={`/${raw}`}>{raw}</Raw>
            <DotDivider space={6} />
            <SubsInfo>
              <UserIcon />
              {/* <UserCount>{subscribersCount}</UserCount> */}
              <UserCount>74</UserCount>
            </SubsInfo>
          </SubInfo>
        </Info>
      </Header>
      <Desc>{cutRest(desc, 50)}</Desc>
    </Wrapper>
  )
}

export default memo(CommunityCard)
