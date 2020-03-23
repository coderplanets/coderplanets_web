/*
 *
 * VerifiedSign
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { ArrowButton } from '@components/Buttons'
import Tooltip from '@components/Tooltip'

import {
  Wrapper,
  Icon,
  Text,
  PopContentWrapper,
  PopHeader,
  PopHeaderIcon,
  PopHeaderText,
  PopHighlight,
  RulesWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:VerifiedSign:index')

const PopContent = ({ communityTitle }) => {
  return (
    <PopContentWrapper>
      <PopHeader>
        <PopHeaderIcon src={`${ICON_CMD}/verified.svg`} />
        <PopHeaderText>官方认证</PopHeaderText>
      </PopHeader>
      <div>
        我们已通过各种渠道证实该社区为{' '}
        <PopHighlight>{communityTitle}</PopHighlight> 官方开通
      </div>
      <RulesWrapper>
        <ArrowButton
          size="tiny"
          onClick={e => {
            e.stopPropagation()
            console.log('oo')
          }}
        >
          认证规则
        </ArrowButton>
      </RulesWrapper>
    </PopContentWrapper>
  )
}

const VerifiedSign = ({ text, type, communityTitle }) => {
  log('type: ', type)
  const [active, setActive] = useState(false)

  return (
    <Wrapper testid="verifiedSign" active={active}>
      <Icon src={`${ICON_CMD}/verified.svg`} />
      <Tooltip
        content={<PopContent communityTitle={communityTitle} />}
        placement="bottom"
        trigger="click"
        onHide={() => setActive(false)}
        onShow={() => setActive(true)}
      >
        <Text active={active}>{text}</Text>
      </Tooltip>
    </Wrapper>
  )
}

VerifiedSign.propTypes = {
  type: T.oneOf(['community', 'editor']),
  text: T.string,
  communityTitle: T.string,
}

VerifiedSign.defaultProps = {
  type: 'community',
  text: '官方',
  communityTitle: 'groupher',
}

export default React.memo(VerifiedSign)
