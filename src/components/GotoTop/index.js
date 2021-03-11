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

const GotoTop = ({ testid }) => {
  return (
    <Wrapper testid={testid} onClick={scrollToHeader}>
      <Icon src={`${ICON}/shape/air-balloon.svg`} />
      <Hint>回到顶部</Hint>
    </Wrapper>
  )
}

GotoTop.propTypes = {
  testid: T.string,
}

GotoTop.defaultProps = {
  testid: 'goto-top',
}

export default React.memo(GotoTop)
