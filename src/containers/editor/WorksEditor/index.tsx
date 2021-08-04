//

/*
 *
 * WorksEditor
 *
 */

import { FC } from 'react'

import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Preview from './Preview'
import Steps from './Steps'
import Content from './Content'

import type { TStore } from './store'
import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'
import { TMetric } from '@/spec'

/* eslint-disable-next-line */
const log = buildLog('C:WorksEditor')
type TProps = {
  worksEditor?: TStore
  testid?: string
  metric: TMetric
}

const WorksEditorContainer: FC<TProps> = ({
  worksEditor: store,
  testid = 'works-editor',
  metric = METRIC.COMMUNITY,
}) => {
  useInit(store)
  const { step, worksData, useTemplate } = store

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <Preview step={step} works={worksData} />
        <Steps step={step} />
        <Content step={step} works={worksData} useTemplate={useTemplate} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(WorksEditorContainer) as FC<TProps>
