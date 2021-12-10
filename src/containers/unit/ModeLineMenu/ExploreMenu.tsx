import { FC, memo } from 'react'
import Link from 'next/link'

import type { TCommunity } from '@/spec'
import { ROUTE } from '@/constant'
import ArrowButton from '@/widgets/Buttons/ArrowButton'

import {
  Wrapper,
  Header,
  Title,
  CommunityWrapper,
  CommunityCard,
  CommunityLogo,
  CommunityTitle,
} from './styles/explore_menu'

type TProps = {
  communities: TCommunity[]
  // community: TCommunity
}

const ExploreMenu: FC<TProps> = ({ communities }) => {
  return (
    <Wrapper>
      <Header>
        <Title>我加入的:</Title>
        <Link href={`/${ROUTE.EXPLORE}`}>
          <ArrowButton arrowStyle="simple" size="tiny">
            全部社区
          </ArrowButton>
        </Link>
      </Header>
      <CommunityWrapper>
        {communities.map((c, index) => (
          <Link key={c.raw} href={`/${c.raw}`}>
            <CommunityCard margin={index % 2 !== 0}>
              <CommunityLogo src={c.logo} raw={c.raw} />
              <CommunityTitle>{c.title}</CommunityTitle>
            </CommunityCard>
          </Link>
        ))}
      </CommunityWrapper>
    </Wrapper>
  )
}

export default memo(ExploreMenu)
