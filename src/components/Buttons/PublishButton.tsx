/*
 *
 * PublishButton
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import Tooltip from '@/components/Tooltip'
import {
  Wrapper,
  Label,
  LabelIcon,
  ActionLink,
  Icon,
} from './styles/publish_button'

/* eslint-disable-next-line */
const log = buildLog('c:PublishButton:index')

const PublishButton = ({
  label,
  labelIconSrc,
  onPublish,
  onVote,
  onImport,
  onFAQ,
}) => {
  return (
    <Wrapper>
      <Label>
        <div>{label}</div>
        <LabelIcon src={labelIconSrc} />
      </Label>
      <Tooltip content="发布帖子" placement="bottom" duration={0}>
        <ActionLink onClick={onPublish}>
          <Icon src={`${ICON_CMD}/publish_write.svg`} />
        </ActionLink>
      </Tooltip>
      <Tooltip content="发布投票" placement="bottom" duration={0}>
        <ActionLink onClick={onVote}>
          <Icon src={`${ICON_CMD}/publish_vote.svg`} />
        </ActionLink>
      </Tooltip>
      <Tooltip content="导入内容" placement="bottom" duration={0}>
        <ActionLink onClick={onImport}>
          <Icon src={`${ICON_CMD}/publish_import.svg`} />
        </ActionLink>
      </Tooltip>
      <Tooltip content="发帖礼仪" placement="bottom" duration={0}>
        <ActionLink onClick={onFAQ}>
          <Icon src={`${ICON_CMD}/publish_faq.svg`} />
        </ActionLink>
      </Tooltip>
    </Wrapper>
  )
}

PublishButton.propTypes = {
  label: T.string,
  labelIconSrc: T.string,
  onPublish: T.func,
  onVote: T.func,
  onImport: T.func,
  onFAQ: T.func,
}

PublishButton.defaultProps = {
  label: '发布帖子 ',
  labelIconSrc: `${ICON_CMD}/publish_pen.svg`,
  onPublish: log,
  onVote: log,
  onImport: log,
  onFAQ: log,
}

export default React.memo(PublishButton)
