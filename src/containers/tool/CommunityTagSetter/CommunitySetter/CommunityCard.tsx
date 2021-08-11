import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { cutRest } from '@/utils/helper'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'
import DotDivider from '@/components/DotDivider'

// import { TAG_VIEW } from '../constant'
import {
  Wrapper,
  Intro,
  Logo,
  Title,
  Name,
  Raw,
  Digest,
  CheckWrapper,
} from '../styles/community_setter/community_card'

type TProps = {
  item: TCommunity
}

const Community: FC<TProps> = ({ item }) => {
  return (
    <Wrapper key={item.id}>
      <Logo src={item.logo} noLazy />
      <Intro>
        <Title>
          <Name>{item.title}</Name>
          <DotDivider space={5} />
          <Raw>{item.raw}</Raw>
          <SpaceGrow />

          <CheckWrapper>
            <Checker size="small" />
          </CheckWrapper>
        </Title>
        <Digest>
          {cutRest(item.desc, 24)}
          {/* {cutRest('may be the most sexiest item for developer, ever', 20)} */}
        </Digest>
      </Intro>
    </Wrapper>
  )
}

export default memo(Community)
