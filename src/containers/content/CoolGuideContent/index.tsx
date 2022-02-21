/*
 *
 * CoolGuideContent
 *
 */

import { FC } from 'react'
import { isMobile } from 'react-device-detect'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import FilterBar from './FilterBar'
import Content from './Content'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, menuOnSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

type TProps = {
  coolGuideContent?: TStore
  metric?: TMetric
  testid?: string
}

const CoolGuideContentContainer: FC<TProps> = ({
  coolGuideContent: store,
  metric,
  testid = 'cool-guide-content',
}) => {
  useInit(store)

  const { topFilter, displayType } = store

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        {!isMobile && (
          <FilterBar topFilter={topFilter} menuOnSelect={menuOnSelect} />
        )}

        <ContentWrapper>
          <Content displayType={displayType} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(CoolGuideContentContainer, 'coolGuideContent') as FC<TProps>
