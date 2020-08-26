import React from 'react'
import Link from 'next/link'

import { ROUTE } from '@/constant'

import {
  Wrapper,
  InnerWrapper,
  Links,
  Site,
  MoreText,
} from './styles/bottom_info'

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

const BottomInfo = ({ layout }) => (
  <Wrapper>
    <InnerWrapper layout={layout}>
      <Links>
        {FRIENDS.map((site, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Site key={index} href={site.link}>
            {site.title}
          </Site>
        ))}
      </Links>
      <Link href={`/${ROUTE.FRIENDS}`} passHref>
        <MoreText href={ROUTE.FRIENDS}>更多友情链接</MoreText>
      </Link>
    </InnerWrapper>
  </Wrapper>
)

export default React.memo(BottomInfo)
