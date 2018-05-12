/*
 *
 * StatusBox
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../../components'
import { makeDebugger } from '../../utils'
import {
  Wrapper,
  Msg,
  SuccessMsgBox,
  ErrorMsgBox,
  WarningMsgBox,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:StatusBox:index')
/* eslint-enable no-unused-vars */

function getDefaultMsg(success, error) {
  if (success) {
    return '已保存'
  } else if (error) {
    return '出错了'
  }
  return '内容无改动，请编辑后再提交'
}

const StatusBox = ({ success, error, warn, msg }) => {
  const hint = msg === '' ? getDefaultMsg(success, error) : msg
  return (
    <Wrapper>
      <SuccessMsgBox success={success}>
        <Icon type="check-circle" />
        <Msg>{hint}</Msg>
      </SuccessMsgBox>
      <WarningMsgBox warn={warn}>
        <Icon type="exclamation-circle" />
        <Msg>{hint}</Msg>
      </WarningMsgBox>
      <ErrorMsgBox error={error}>
        <Icon type="close-circle" />
        <Msg>{hint}</Msg>
      </ErrorMsgBox>
    </Wrapper>
  )
}

StatusBox.propTypes = {
  // https://www.npmjs.com/package/prop-types
  // info: PropTypes.bool,
  warn: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  msg: PropTypes.string,
}

StatusBox.defaultProps = {
  // info: true,
  warn: false,
  success: false,
  error: false,
  msg: '',
}

export default StatusBox
