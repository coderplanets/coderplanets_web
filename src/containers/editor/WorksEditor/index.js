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
import { connectStore, buildLog } from '@/utils'

import Preview from './Preview'
import Steps from './Steps'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksEditor')

const WorksEditorContainer = ({ worksEditor: store, testId, metric }) => {
  useInit(store)

  return (
    <Wrapper testId={testId}>
      <InnerWrapper metric={metric}>
        <Preview />
        <Steps />
        <ContentWrapper>content editor</ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

WorksEditorContainer.propTypes = {
  worksEditor: T.any.isRequired,
  testId: T.string,
  metric: T.oneOf(values(METRIC)),
}

WorksEditorContainer.defaultProps = {
  testId: 'works-editor',
  metric: METRIC.COMMUNITY,
}

export default connectStore(WorksEditorContainer)
