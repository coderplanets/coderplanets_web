/*
 *
 * PublishLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'

import { makelogger } from '@utils'
import { Wrapper, PublishIcon } from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:PublishLabel:index')

const PublishLabel = ({ text, iconSrc }) => (
  <Wrapper>
    <div>{text}</div>
    <PublishIcon src={iconSrc} />
  </Wrapper>
)

PublishLabel.propTypes = {
  text: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
}

PublishLabel.defaultProps = {
  iconSrc: `${ICON_CMD}/publish_pen.svg`,
}

export default PublishLabel
