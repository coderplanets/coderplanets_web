//

/*
 *
 * HelpCenterContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import type { TStore } from './store'

import Cover from './Cover'
import Detail from './Detail'
import Digest from './Digest'

import { VIEW } from './constant'

import { Wrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HelpCenterContent')

const items = [
  {
    id: '0',
    title: '这是一个什么社区？',
  },
  {
    id: '1',
    title: 'Wix Bookings: Tips for Marketing',
  },
  {
    id: '2',
    title: '在哪里可以下载到 iOS 版本的安装包?',
  },
  {
    id: '3',
    title: '后续会有更多的作品吗',
  },
]

type TProps = {
  helpCenterContent?: TStore
  testid?: string
  metric?: TMetric
}

const HelpCenterContentContainer: FC<TProps> = ({
  helpCenterContent: store,
  testid = 'help-center-content',
  metric = METRIC.HELP_CENTER,
}) => {
  useInit(store)
  const { view, curCommunity, visibles } = store

  return (
    <Wrapper testid={testid}>
      <Digest metric={metric} community={curCommunity} />
      <ContentWrapper metric={metric}>
        {view === VIEW.COVER ? (
          <Cover items={items} community={curCommunity} visibles={visibles} />
        ) : (
          <Detail community={curCommunity} visibles={visibles} />
        )}
      </ContentWrapper>
    </Wrapper>
  )
}

export default bond(
  HelpCenterContentContainer,
  'helpCenterContent',
) as FC<TProps>
