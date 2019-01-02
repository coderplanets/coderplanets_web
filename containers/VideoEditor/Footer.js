import React from 'react'

import { Space, StatusBox, Button, Icon } from '../../components'
import { canclePublish, onPublish } from './logic'

import {
  FooterWrapper,
  RespectText,
  PublishBtns,
  Divider,
} from './styles/footer'

const DoingText = ({ isEdit }) => {
  return isEdit ? (
    <React.Fragment>更新</React.Fragment>
  ) : (
    <React.Fragment>发布</React.Fragment>
  )
}

// TODO: change show -> Maybe
const Footer = ({ isEdit, publishing, success, error, warn, statusMsg }) => (
  <FooterWrapper>
    <StatusBox success={success} error={error} warn={warn} msg={statusMsg} />
    <RespectText show={!success && !warn && !error && !publishing}>
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
          <Button size="default" type="primary" ghost onClick={canclePublish}>
            取消
          </Button>
          <Space right="15px" />
          <Button size="default" type="primary" onClick={onPublish}>
            <DoingText isEdit={isEdit} />
          </Button>
        </div>
      )}
    </PublishBtns>
  </FooterWrapper>
)

export default Footer
