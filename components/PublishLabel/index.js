/*
 *
 * PublishLabel
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'

import { buildLog } from '@utils'
import { Wrapper, PublishIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:PublishLabel:index')

const PublishLabel = ({ text, iconSrc }) => (
  <Wrapper>
    <div>{text}</div>
    <PublishIcon src={iconSrc} />
  </Wrapper>
)

PublishLabel.propTypes = {
  text: T.string.isRequired,
  iconSrc: T.string,
}

PublishLabel.defaultProps = {
  iconSrc: `${ICON_CMD}/publish_pen.svg`,
}

export default PublishLabel
