/*
 *
 * VerifiedSign
 *
 */

import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

import ExpandIcon from '@/widgets/ExpandIcon'
import ArrowButton from '@/widgets/Buttons/ArrowButton'

import {
  PopContentWrapper,
  PopHeader,
  PopHeaderIcon,
  PopHeaderText,
  PopHighlight,
  RulesWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:VerifiedSign:index')

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
        <ArrowButton size="tiny">认证规则</ArrowButton>
      </RulesWrapper>
    </PopContentWrapper>
  )
}

type TProps = {
  type?: 'community' | 'editor'
  text?: string
  communityTitle?: string
}

const VerifiedSign: FC<TProps> = ({
  text = '官方',
  type = 'community',
  communityTitle = 'groupher',
}) => {
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

export default memo(VerifiedSign)
