/*
 *
 * PublishButton
 *
 */

import { memo, FC } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

import Tooltip from '@/widgets/Tooltip'
import {
  Wrapper,
  Label,
  LabelIcon,
  ActionLink,
  Icon,
} from './styles/fancy_publish_button'

/* eslint-disable-next-line */
const log = buildLog('w:PublishButton:index')

type TProps = {
  label?: string
  labelIconSrc?: string
  onPublish?: () => void
  onVote?: () => void
  onImport?: () => void
  onFAQ?: () => void
}

const PublishButton: FC<TProps> = ({
  label = '发布帖子 ',
  labelIconSrc = `${ICON_CMD}/publish_pen.svg`,
  onPublish = log,
  onVote = log,
  onImport = log,
  onFAQ = log,
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

export default memo(PublishButton)
