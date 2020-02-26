/*
 *
 * SearchingLabel
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, LoadingIcon, LoadingText } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:SearchingLabel:index')

const SearchingLabel = ({ iconSrc, text }) => (
  <Wrapper>
    <LoadingIcon src={iconSrc} />
    <LoadingText>{text}</LoadingText>
  </Wrapper>
)

SearchingLabel.propTypes = {
  iconSrc: T.string,
  text: T.string,
}

SearchingLabel.defaultProps = {
  text: '正在加载 ...',
  iconSrc: `${ICON_CMD}/loading_sand.svg`,
}

export default React.memo(SearchingLabel)
