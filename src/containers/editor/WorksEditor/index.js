//

/*
 *
 * WorksEditor
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Preview from './Preview'
import Steps from './Steps'
import Content from './Content'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksEditor')

const WorksEditorContainer = ({ worksEditor: store, testid, metric }) => {
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

WorksEditorContainer.propTypes = {
  worksEditor: T.any.isRequired,
  testid: T.string,
  metric: T.oneOf(values(METRIC)),
}

WorksEditorContainer.defaultProps = {
  testid: 'works-editor',
  metric: METRIC.COMMUNITY,
}

export default pluggedIn(WorksEditorContainer)
