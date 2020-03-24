/*
 *
 * ThreadSelector
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { THREAD } from '@constant'
import { buildLog, Trans } from '@utils'

import Tooltip from '@components/Tooltip'
import Panel from './Panel'

import {
  Wrapper,
  Label,
  BoxedLabel,
  LabelIcon,
  LabelText,
  LabelCount,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ThreadSelector:index')

const ThreadSelector = ({
  options,
  active,
  onSelect,
  totalCount,
  lookLike,
}) => (
  <Wrapper>
    <Tooltip
      placement="right"
      content={<Panel options={options} active={active} onSelect={onSelect} />}
    >
      <div>
        {lookLike === 'text' ? (
          <Label>
            <LabelText>{Trans(active)}</LabelText>
            <LabelIcon src={`${ICON_CMD}/thread_more.svg`} />
          </Label>
        ) : (
          <BoxedLabel>
            <LabelText>{Trans(active)}</LabelText>
            <LabelIcon src={`${ICON_CMD}/thread_more.svg`} />
          </BoxedLabel>
        )}
      </div>
    </Tooltip>
    <LabelCount>结果共 {totalCount} 条</LabelCount>
  </Wrapper>
)

ThreadSelector.propTypes = {
  options: T.arrayOf(T.string),
  active: T.string,
  onSelect: T.func,
  totalCount: T.number,
  lookLike: T.oneOf(['text', 'box']),
}

ThreadSelector.defaultProps = {
  options: [THREAD.POST, THREAD.VIDEO, THREAD.REPO, THREAD.JOB],
  active: THREAD.POST,
  onSelect: log,
  totalCount: 0,
  lookLike: 'text',
}

export default React.memo(ThreadSelector)
