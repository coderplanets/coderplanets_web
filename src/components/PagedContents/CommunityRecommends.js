import React from 'react'

import Tooltip from '@components/Tooltip'

import {
  Wrapper,
  Title,
  ListWrapper,
  Community,
  Logo,
} from './styles/community_recommends'

const items = [
  {
    id: '0',
    title: 'elixir',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/elixir.png',
  },
  {
    id: '1',
    title: 'javascript',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '2',
    title: 'ruby',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/ruby.png',
  },
  {
    id: '3',
    title: 'clojure',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/clojure.png',
  },
]

const CommunityRecommends = () => {
  return (
    <Wrapper>
      <Title>热门社区</Title>
      <ListWrapper>
        {items.map(item => (
          <Community key={item.id}>
            <Tooltip content={item.title} placement="bottom">
              <div>
                <Logo src={item.icon} />
              </div>
            </Tooltip>
          </Community>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

export default React.memo(CommunityRecommends)
