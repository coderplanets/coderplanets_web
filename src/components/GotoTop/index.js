/*
 *
 * GotoTop
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { scrollToHeader } from '@/utils'

import { Wrapper, Icon, Hint } from './styles'

const GotoTop = ({ testId }) => {
  return (
    <Wrapper testId={testId} onClick={scrollToHeader}>
      <Icon src={`${ICON}/shape/air-balloon.svg`} />
      <Hint>回到顶部</Hint>
    </Wrapper>
  )
}

GotoTop.propTypes = {
  testId: T.string,
}

GotoTop.defaultProps = {
  testId: 'goto-top',
}

export default React.memo(GotoTop)
