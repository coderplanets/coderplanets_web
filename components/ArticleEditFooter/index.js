/*
 *
 * ArticleEditFooter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd'

import { buildLog } from '@utils'
import { Space } from '../BaseStyled'
import { Wrapper, RespectText, PublishBtns, Divider } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleEditFooter:index')

const DoingText = ({ isEdit }) => {
  return isEdit ? (
    <React.Fragment>更新</React.Fragment>
  ) : (
    <React.Fragment>发布</React.Fragment>
  )
}

const ArticleEditFooter = ({ isEdit, publishing, onCancle, onPublish }) => (
  <Wrapper>
    <RespectText>请尊重自己和他人的时间，不要发布无意义的内容。</RespectText>
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

  onCancle: PropTypes.func,
  onPublish: PropTypes.func,
}

ArticleEditFooter.defaultProps = {
  isEdit: false,
  publishing: false,

  onCancle: log,
  onPublish: log,
}

export default React.memo(ArticleEditFooter)
