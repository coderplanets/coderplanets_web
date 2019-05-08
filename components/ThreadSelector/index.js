/*
 *
 * ThreadSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'

import { makeDebugger, THREAD, Trans } from '@utils'
import Popover from '@components/Popover'
import {
  Wrapper,
  Label,
  BoxedLabel,
  LabelIcon,
  LabelText,
  LabelCount,
} from './styles'
import Panel from './Panel'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ThreadSelector:index')

const ThreadSelector = ({
  options,
  active,
  onSelect,
  totalCount,
  lookLike,
}) => (
  <Wrapper>
    <Popover
      placement="right"
      trigger="hover"
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
    </Popover>
    <LabelCount>结果共 {totalCount} 条</LabelCount>
  </Wrapper>
)

ThreadSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
  onSelect: PropTypes.func,
  totalCount: PropTypes.number,
  lookLike: PropTypes.oneOf(['text', 'box']),
}

ThreadSelector.defaultProps = {
  options: [THREAD.POST, THREAD.VIDEO, THREAD.REPO, THREAD.JOB],
  active: THREAD.POST,
  onSelect: debug,
  totalCount: 0,
  lookLike: 'text',
}

export default ThreadSelector
