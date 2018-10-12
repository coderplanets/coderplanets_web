/*
 *
 * ThreadSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import Popover from '../Popover'
import { Label, LabelIcon, LabelText } from './styles'
import Panel from './Panel'

import { makeDebugger, THREAD, Trans } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ThreadSelector:index')
/* eslint-enable no-unused-vars */

const ThreadSelector = ({ options, active, onSelect }) => (
  <Popover
    placement="bottom"
    trigger="hover"
    content={<Panel options={options} active={active} onSelect={onSelect} />}
  >
    <Label>
      <LabelText>{Trans(active)}</LabelText>
      <LabelIcon src={`${ICON_CMD}/thread_more.svg`} />
    </Label>
  </Popover>
)

ThreadSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
  onSelect: PropTypes.func,
}

ThreadSelector.defaultProps = {
  options: [THREAD.POST, THREAD.VIDEO, THREAD.REPO, THREAD.JOB],
  active: THREAD.POST,
  onSelect: debug,
}

export default ThreadSelector
