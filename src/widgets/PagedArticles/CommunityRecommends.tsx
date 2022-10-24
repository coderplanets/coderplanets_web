import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'

import Tooltip from '@/widgets/Tooltip'
import CommunityCard from '@/widgets/Cards/CommunityCard'

import {
  Wrapper,
  Title,
  ListWrapper,
  Community,
  CommunityTitle,
} from './styles/community_recommends'

const tmpItems = [
  {
    id: '1',
    title: 'elixir',
    raw: 'elixir',
    logo: 'https://assets.groupher.com/icons/pl/elixir.png',
    desc: 'maybe the most popular UI framework for web, maybe the most popular UI framework for web',
    subscribersCount: 100,
  },
  {
    id: '2',
    title: 'javascript',
    raw: 'javascript',
    logo: 'https://assets.groupher.com/icons/pl/javascript.png',
    desc: 'maybe the most popular UI framework for web, maybe the most popular UI framework for web',
    subscribersCount: 100,
  },
  {
    id: '3',
    title: 'ruby',
    raw: 'ruby',
    logo: 'https://assets.groupher.com/icons/pl/ruby.png',
    desc: 'maybe the most popular UI framework for web, maybe the most popular UI framework for web',
    subscribersCount: 100,
  },
  {
    id: '4',
    title: 'clojure',
    raw: 'clojure',
    logo: 'https://assets.groupher.com/icons/pl/clojure.png',
    desc: 'maybe the most popular UI framework for web, maybe the most popular UI framework for web',
    subscribersCount: 100,
  },
]

type TProps = {
  items?: TCommunity[]
}

const CommunityRecommends: FC<TProps> = ({ items = tmpItems }) => {
  return (
    <Wrapper>
      <Title>热门社区</Title>
      <ListWrapper>
        {items.map((item) => (
          <Community key={item.id}>
            <Tooltip content={<CommunityCard item={item} />} placement="top">
              <CommunityTitle>{item.title}</CommunityTitle>
            </Tooltip>
          </Community>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

export default memo(CommunityRecommends)
