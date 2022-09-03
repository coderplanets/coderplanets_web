/*
 *
 * WorksEditor
 *
 */

import { FC } from 'react'

import type { TEditMode, TMetric } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import NoticeBar from '@/widgets/NoticeBar'

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
    allowEdit,
  } = store

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        {!allowEdit && (
          <NoticeBar
            type="notice"
            content="只有作者可以编辑本内容。"
            left={25}
          />
        )}

        <Preview step={step} works={previewData} />
        <StepsBar step={step} submitState={submitState} />
        <Content
          mode={mode as TEditMode}
          step={step}
          inputData={inputData}
          socialOptions={socialOptions}
          techCommunities={techCommunities}
          searchedUsers={searchedUsersData}
        />
        {allowEdit && (
          <Footer
            mode={mode as TEditMode}
            step={step}
            inputData={inputData}
            submitState={submitState}
          />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(WorksEditorContainer, 'worksEditor') as FC<TProps>
