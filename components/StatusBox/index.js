/*
 *
 * StatusBox
 *
 */

import React from 'react'
import R from 'ramda'
import T from 'prop-types'

import { Icon } from 'antd'
import { buildLog } from '@utils'
import {
  Wrapper,
  Msg,
  SuccessMsgBox,
  ErrorMsgBox,
  WarningMsgBox,
  ErrorArrayWrapper,
  // ErrorMsg,
  // ErrorKey,
  ErrorDetail,
} from './styles'

/* import { buildLog, uid, isObject } from '@utils' */

/* eslint-disable-next-line */
const log = buildLog('c:StatusBox:index')

function getDefaultMsg(success, error) {
  if (success) {
    return '已保存'
  }
  if (error) {
    return '出错了'
  }
  return '内容无改动，请编辑后再提交'
}

/*
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
*/

const ErrorMessages = ({ show, msg }) => {
  if (R.isEmpty(msg)) {
    return (
      <ErrorMsgBox show={show}>
        <Icon type="close-circle" />
        <Msg>出错了</Msg>
      </ErrorMsgBox>
    )
  }

  // const msgArray = dencodeGqError(msg)

  return (
    <ErrorArrayWrapper>
      <ErrorDetail>{msg}</ErrorDetail>

      {/*
           {msgArray.map(errObj => (
           <ErrorMsg key={uid.gen()}>
           <ErrorKey>{errObj.key}</ErrorKey>
           <ErrorDetail>{errObj.detail}</ErrorDetail>
           </ErrorMsg>
           ))}
         */}
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
  // info: T.bool,
  warn: T.bool,
  success: T.bool,
  error: T.bool,
  msg: T.string,
}

StatusBox.defaultProps = {
  // info: true,
  warn: false,
  success: false,
  error: false,
  msg: '',
}

export default StatusBox
