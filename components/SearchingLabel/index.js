/*
 *
 * SearchingLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'
import { makeDebugger } from '@utils'
import { Wrapper, LoadingIcon, LoadingText } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:SearchingLabel:index')

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
