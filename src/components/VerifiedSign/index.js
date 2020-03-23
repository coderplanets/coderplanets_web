/*
 *
 * VerifiedSign
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, Icon, Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:VerifiedSign:index')

const VerifiedSign = ({ text, type }) => {
  log('type: ', type)
  return (
    <Wrapper testid="verifiedSign">
      <Icon src={`${ICON_CMD}/verified.svg`} />
      <Text>{text}</Text>
    </Wrapper>
  )
}

VerifiedSign.propTypes = {
  type: T.oneOf(['community', 'editor']),
  text: T.string,
}

VerifiedSign.defaultProps = {
  type: 'community',
  text: '已认证',
}

export default React.memo(VerifiedSign)
