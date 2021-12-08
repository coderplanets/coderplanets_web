/*
 *
 * CoolGuideContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import usePlatform from '@/hooks/usePlatform'

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

  const { isMobile } = usePlatform()
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

export default pluggedIn(CoolGuideContentContainer) as FC<TProps>
