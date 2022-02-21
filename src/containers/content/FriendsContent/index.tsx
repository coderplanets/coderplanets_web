//

/*
 *
 * FriendsContent
 *
 */

// import { FC } from 'react'
import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import { Br } from '@/widgets/Common'
import { FriendsGallery } from '@/widgets/GalleryHub'

import type { TStore } from './store'

import { Wrapper, InnerWrapper, Title, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:FriendsContent')

const items = [
  {
    id: '0',
    addr: 'https://your-site.com',
    title: '空缺中',
  },
  {
    id: '1',
    addr: 'https://your-site.com',
    title: '空缺中',
  },
  {
    id: '2',
    addr: 'https://your-site.com',
    title: '空缺中',
  },
  {
    id: '3',
    addr: 'https://your-site.com',
    title: '空缺中',
  },
  {
    id: '4',
    addr: 'https://your-sitededkkldjfljpoljsiiek.com',
    title: '空缺中',
  },
]

type TProps = {
  friendsContent?: TStore
  testid?: string
  metric?: TMetric
}

const FriendsContentContainer: FC<TProps> = ({
  friendsContent: store,
  testid = 'friends-content',
  metric,
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <InnerWrapper>
        <Br top={50} />
        <Title>友情链接</Title>
        <Br top={45} />
        <ContentWrapper metric={metric}>
          <FriendsGallery items={items} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(FriendsContentContainer, 'friendsContent') as FC<TProps>
