/*
 *
 * DivideText
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import { Wrapper, Content, LeftLine, RightLine } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:DivideText:index')

const DivideText = ({ testId, children }) => {
  return (
    <Wrapper testId={testId}>
      <LeftLine />
      <Content>{children}</Content>
      <RightLine />
    </Wrapper>
  )
}

DivideText.propTypes = {
  testId: T.string,
  children: T.oneOfType([T.string, T.node]).isRequired,
}

DivideText.defaultProps = {
  testId: 'divide-text',
}

export default React.memo(DivideText)
