/*
 *
 * ArticleEditFooter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Button, Icon } from 'antd'

import { Space } from '../BaseStyled'
import StatusBox from '../StatusBox'

import { Wrapper, RespectText, PublishBtns, Divider } from './styles'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ArticleEditFooter:index')
/* eslint-enable no-unused-vars */

const DoingText = ({ isEdit }) => {
  return isEdit ? (
    <React.Fragment>更新</React.Fragment>
  ) : (
    <React.Fragment>发布</React.Fragment>
  )
}

const ArticleEditFooter = ({
  isEdit,
  publishing,
  success,
  error,
  warn,
  statusMsg,
  onCancle,
  onPublish,
}) => (
  <Wrapper>
    <StatusBox success={success} error={error} warn={warn} msg={statusMsg} />
    <RespectText show={!success && !warn && !error}>
      请尊重自己和他人的时间，不要发布无意义的内容。
    </RespectText>
    <Divider />
    <PublishBtns>
      {publishing ? (
        <div>
          <Button size="default" type="primary" ghost>
            取消
          </Button>
          <Space right="15px" />
          <Button size="default" type="primary">
            <Icon type="loading" />
            正在
            <DoingText isEdit={isEdit} />
            ...
          </Button>
        </div>
      ) : (
        <div>
          <Button size="default" type="primary" ghost onClick={onCancle}>
            取消
          </Button>
          <Space right="15px" />
          <Button size="default" type="primary" onClick={onPublish}>
            <DoingText isEdit={isEdit} />
          </Button>
        </div>
      )}
    </PublishBtns>
  </Wrapper>
)

ArticleEditFooter.propTypes = {
  isEdit: PropTypes.bool,
  publishing: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  warn: PropTypes.bool,
  statusMsg: PropTypes.string,

  onCancle: PropTypes.func,
  onPublish: PropTypes.func,
}

ArticleEditFooter.defaultProps = {
  isEdit: false,
  publishing: false,
  success: false,
  error: false,
  warn: false,
  statusMsg: '',

  onCancle: debug,
  onPublish: debug,
}

export default React.memo(ArticleEditFooter)
