/*
 *
 * StatusBox
 *
 */

import React from 'react'
import shortid from 'shortid'
import R from 'ramda'
import PropTypes from 'prop-types'

import { Icon } from '..'
import { makeDebugger } from '../../utils'
import {
  Wrapper,
  Msg,
  SuccessMsgBox,
  ErrorMsgBox,
  WarningMsgBox,
  ErrorArrayWrapper,
  ErrorMsg,
  ErrorKey,
  ErrorDetail,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:StatusBox:index')
/* eslint-enable no-unused-vars */

function getDefaultMsg(success, error) {
  if (success) {
    return '已保存'
  }
  if (error) {
    return '出错了'
  }
  return '内容无改动，请编辑后再提交'
}

const dencodeGqError = msg => {
  try {
    return JSON.parse(msg)
  } catch (e) {
    return [
      {
        detail: '未知解析错误',
        key: 'GraphQL',
      },
    ]
  }
}

const ErrorMessages = ({ show, msg }) => {
  if (R.isEmpty(msg)) {
    return (
      <ErrorMsgBox show={show}>
        <Icon type="close-circle" />
        <Msg>出错了</Msg>
      </ErrorMsgBox>
    )
  }

  const msgArray = dencodeGqError(msg)

  return (
    <ErrorArrayWrapper>
      {msgArray.map(errObj => (
        <ErrorMsg key={shortid.generate()}>
          <ErrorKey>{errObj.key}</ErrorKey>
          <ErrorDetail>{errObj.detail}</ErrorDetail>
        </ErrorMsg>
      ))}
    </ErrorArrayWrapper>
  )
}

const StatusBox = ({ success, error, warn, msg }) => {
  const hint = msg === '' ? getDefaultMsg(success, error) : msg
  return (
    <Wrapper>
      <SuccessMsgBox show={success}>
        <Icon type="check-circle" />
        <Msg>{hint}</Msg>
      </SuccessMsgBox>
      <WarningMsgBox show={warn}>
        <Icon type="exclamation-circle" />
        <Msg>{hint}</Msg>
      </WarningMsgBox>
      <ErrorMessages show={error} msg={msg} />
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
