import { FC } from 'react'

import LinksCard from '@/widgets/LinksCard'
import type { TCommunity } from '@/spec'
import type { THelpArticle, TVisibles } from './spec'

import Footer from './Footer'

import { Wrapper, ContentWrapper } from './styles/cover'
import { gotoDetail } from './logic'

type TProps = {
  items: THelpArticle[]
  community: TCommunity
  visibles: TVisibles
}

const Cover: FC<TProps> = ({ items, community, visibles }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LinksCard
          title="常见问题"
          items={items}
          onSelect={(item: THelpArticle) => gotoDetail(item)}
        />
        <LinksCard
          title="常见问题"
          items={items}
          onSelect={(item) => gotoDetail(item)}
        />
        <LinksCard
          title="常见问题"
          items={items}
          onSelect={(item) => gotoDetail(item)}
        />
        <LinksCard
          title="常见问题"
          items={items}
          onSelect={(item) => gotoDetail(item)}
        />
        <LinksCard
          title="常见问题"
          items={items}
          onSelect={(item) => gotoDetail(item)}
        />
      </ContentWrapper>
      <Footer community={community} visibles={visibles} />
    </Wrapper>
  )
}

export default Cover
