import React from 'react'

// import { ICON_CMD } from '../../config'
import { Wrapper, Title, Desc, Divider } from './styles/question_content'

const QuestionContent = () => (
  <Wrapper>
    <Title>为什么要手动填写付款信息?</Title>
    <Desc>
      支付宝/微信等支付平台需要企业认证。
      目前公司已经注册，需要一定时间对接调试，在此之前只支持手动充值, 请谅解。
    </Desc>
    <Divider />
    <Title>付款成功但是未填写账户信息怎么办？</Title>
    <Desc>
      这种情况您可以将平台账户信息发邮件至 member@coderplanets.com,
      客服会尽快为您处理。
    </Desc>
    <Divider />
    <Title>资金的主要用途是什么？</Title>
    <Desc>
      您的资助将主要用于 coderplanets 网站的日常开发维护等, 使平台变得更稳定,
      更好的服务广大 IT 从业者。
    </Desc>
  </Wrapper>
)

export default QuestionContent
