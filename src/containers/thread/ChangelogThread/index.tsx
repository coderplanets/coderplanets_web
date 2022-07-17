/* *
 * ChangelogThread
 *
 */

import { FC } from 'react'

import { CHANGELOG_LAYOUT } from '@/constant'
import { bond } from '@/utils/mobx'

import ChangelogItem from '@/widgets/ChangelogItem'

import Filters from './Filters'

import type { TStore } from './store'
import { Wrapper, PreviousTitle, MainWrapper } from './styles'
import { useInit } from './logic' /* eslint-disable-next-line */

// const log = buildLog('C:ChangelogThread')

type TProps = {
  changelogThread?: TStore
  testid?: string
}

const ChangelogThreadContainer: FC<TProps> = ({
  changelogThread: store,
  testid = 'changelog-thread',
}) => {
  useInit(store)
  const { globalLayout } = store

  return (
    <Wrapper testid={testid}>
      <MainWrapper>
        <ChangelogItem layout={globalLayout.changelog} showFullArticle />

        {globalLayout.changelog === CHANGELOG_LAYOUT.OUTLINE && (
          <PreviousTitle>历史版本</PreviousTitle>
        )}

        <ChangelogItem layout={globalLayout.changelog} />
        <ChangelogItem layout={globalLayout.changelog} />
        <ChangelogItem layout={globalLayout.changelog} />
        <ChangelogItem layout={globalLayout.changelog} />
        <ChangelogItem layout={globalLayout.changelog} />
        <ChangelogItem layout={globalLayout.changelog} />
        <ChangelogItem layout={globalLayout.changelog} />
        <ChangelogItem layout={globalLayout.changelog} />
        <ChangelogItem layout={globalLayout.changelog} />
      </MainWrapper>
      <Filters />
    </Wrapper>
  )
}

export default bond(ChangelogThreadContainer, 'changelogThread') as FC<TProps>
