/*
 *
 * VerifiedSign
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import ExpandIcon from '@/components/ExpandIcon'
import { ArrowButton } from '@/components/Buttons'

import {
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

  return (
    <ExpandIcon
      icon={`${ICON_CMD}/verified.svg`}
      text={text}
      content={<PopContent communityTitle={communityTitle} />}
      type="green"
      size="small"
    />
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
