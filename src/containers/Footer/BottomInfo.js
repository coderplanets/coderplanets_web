import React from 'react'

import {
  Wrapper,
  InnerWrapper,
  Links,
  Site,
  Thanks,
  MoreText,
} from './styles/bottom_info'

import { toggleBusBanner } from './logic'

const FRIENDS = [
  {
    title: 'aab',
    link: 'https://cps.fun',
  },
  {
    title: 'bbb',
    link: 'https://cps.fun',
  },
  {
    title: 'ccc',
    link: 'https://cps.fun',
  },
  {
    title: 'ddd',
    link: 'https://cps.fun',
  },
  {
    title: '暗黑设计',
    link: 'https://cps.fun',
  },
]

const BottomInfo = () => (
  <Wrapper>
    <InnerWrapper>
      <Links>
        {FRIENDS.map((site, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Site key={index} href={site.link}>
            {site.title}
          </Site>
        ))}
      </Links>
      <Thanks onClick={toggleBusBanner}>
        <MoreText>更多友情链接</MoreText>
      </Thanks>
    </InnerWrapper>
  </Wrapper>
)

export default React.memo(BottomInfo)
