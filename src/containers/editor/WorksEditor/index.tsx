//

/*
 *
 * WorksEditor
 *
 */

import { FC } from 'react'

import { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Preview from './Preview'
import StepsBar from './StepsBar'
import Content from './Content'
import Footer from './Footer'

import type { TStore } from './store'
import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksEditor')
type TProps = {
  worksEditor?: TStore
  testid?: string
  metric?: TMetric
}

const WorksEditorContainer: FC<TProps> = ({
  worksEditor: store,
  testid = 'works-editor',
  metric = METRIC.COMMUNITY,
}) => {
  useInit(store)

  const {
    mode,
    step,
    inputData,
    previewData,
    socialOptions,
    techCommunities,
    submitState,
    searchedUsersData,
  } = store

  console.log('searchedUsersData -> ', searchedUsersData)

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <Preview step={step} works={previewData} />
        <StepsBar step={step} submitState={submitState} />
        <Content
          mode={mode}
          step={step}
          inputData={inputData}
          socialOptions={socialOptions}
          techCommunities={techCommunities}
          searchedUsers={searchedUsersData}
        />
        <Footer
          mode={mode}
          step={step}
          inputData={inputData}
          submitState={submitState}
        />
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(WorksEditorContainer) as FC<TProps>
