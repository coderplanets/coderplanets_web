/*
 *
 * PublishButton
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import Tooltip from '@components/Tooltip'
import { Wrapper, Label, ActionLink, Icon } from './styles/publish_button'

/* eslint-disable-next-line */
const log = buildLog('c:PublishButton:index')

const PublishButton = ({ label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Tooltip content="发布帖子" placement="bottom">
        <ActionLink>
          <Icon src={`${ICON_CMD}/publish_write.svg`} />
        </ActionLink>
      </Tooltip>
      <Tooltip content="导入内容" placement="bottom">
        <ActionLink>
          <Icon src={`${ICON_CMD}/publish_import.svg`} />
        </ActionLink>
      </Tooltip>
      <Tooltip content="发布投票" placement="bottom">
        <ActionLink>
          <Icon src={`${ICON_CMD}/publish_vote.svg`} />
        </ActionLink>
      </Tooltip>
      <Tooltip content="发帖礼仪" placement="bottom">
        <ActionLink>
          <Icon src={`${ICON_CMD}/publish_faq.svg`} />
        </ActionLink>
      </Tooltip>
    </Wrapper>
  )
}

PublishButton.propTypes = {
  label: T.string,
}

PublishButton.defaultProps = {
  label: '发布帖子 ',
}

export default React.memo(PublishButton)
