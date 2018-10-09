/*
 *
 * SearchingLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'
import { Wrapper, LoadingIcon, LoadingText } from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:SearchingLabel:index')
/* eslint-enable no-unused-vars */

const SearchingLabel = ({ iconSrc, text }) => (
  <Wrapper>
    <LoadingIcon src={iconSrc} />
    <LoadingText>{text}</LoadingText>
  </Wrapper>
)

SearchingLabel.propTypes = {
  iconSrc: PropTypes.string,
  text: PropTypes.string,
}

SearchingLabel.defaultProps = {
  text: '正在加载 ...',
  iconSrc: `${ICON_CMD}/loading_sand.svg`,
}

export default SearchingLabel
