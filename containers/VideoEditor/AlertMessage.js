import React from 'react'
import { Alert } from 'antd'

import { Margin } from '@components/BaseStyled'
import { ICON_CMD } from '@config'

import {
  Wrapper,
  WarnMsgWrapper,
  WarnMsgItem,
  WarnMsgIcon,
  WarnMsgText,
} from './styles/alert_message'

const WarnMessage = () => (
  <WarnMsgWrapper>
    <WarnMsgItem>
      <WarnMsgIcon src={`${ICON_CMD}/ban.svg`} />
      <WarnMsgText>
        仅限发布公开视频链接，如果您发布的视频内容是需要付费才能观看的，请先获取授权。
      </WarnMsgText>
    </WarnMsgItem>
    <Margin top="7px" />
    <WarnMsgItem>
      <WarnMsgIcon src={`${ICON_CMD}/warn.svg`} />
      <WarnMsgText>
        如非质量极高，请不要发布广告网站,
        如优酷/土豆，爱奇艺，腾讯视频等站点的内容。推荐 youtube, vimeo, B站 等。
      </WarnMsgText>
    </WarnMsgItem>
  </WarnMsgWrapper>
)

const AlertMessage = () => (
  <Wrapper>
    <Alert message={<WarnMessage />} type="warning" />
  </Wrapper>
)

export default AlertMessage
