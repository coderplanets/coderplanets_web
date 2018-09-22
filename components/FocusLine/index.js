/*
 *
 * FocusLine
 *
 */

import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'

import { Wrapper, Icon, TextWrapper, Text, Focus } from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:FocusLine:index')
/* eslint-enable no-unused-vars */

const FocusLine = ({ iconSrc, before, focus, after }) => (
  <Wrapper>
    <Icon src={iconSrc} show={!R.isEmpty(iconSrc)} />
    <TextWrapper>
      <Text>{before}</Text> <Focus>{focus}</Focus> <Text>{after}</Text>
    </TextWrapper>
  </Wrapper>
)

FocusLine.propTypes = {
  iconSrc: PropTypes.string,
  before: PropTypes.string.isRequired,
  focus: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  after: PropTypes.string.isRequired,
}

FocusLine.defaultProps = {
  iconSrc: '',
}

export default FocusLine
