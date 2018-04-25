//
import React from 'react'
import { Button, Icon } from 'antd'

import { Space, StatusBox } from '../../components'

import {
  FooterWrapper,
  RespectText,
  PublishBtns,
  Divider,
} from './styles/footer'

const Footer = ({ onPublish, publishing, success, error, warn, statusMsg }) => (
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
          <Button size="default" type="primary" disabled>
            <Icon type="loading" />正在发布...
          </Button>
        </div>
      ) : (
        <div>
          <Button size="default" type="primary" ghost>
            取消
          </Button>
          <Space right="15px" />
          <Button size="default" type="primary" onClick={onPublish}>
            发<Space right="10px" />布
          </Button>
        </div>
      )}
    </PublishBtns>
  </FooterWrapper>
)

export default Footer
