import React from 'react'

// import { ICON_CMD } from '@/config'
import { Wrapper, Title, Desc, Divider } from './styles/question_content'

const QuestionContent = () => (
  <Wrapper>
    <Title>为什么要手动填写付款信息 ?</Title>
    <Desc>
      国内支付平台都需要企业认证。
      目前公司虽已注册，但因为名称等问题且需要一定时间对接调试，在此之前只支持手动充值,
      请谅解。
    </Desc>
    <Divider />
    <Title>付款成功但是 未填写/填错 账户信息怎么办 ？</Title>
    <Desc>
      这种情况您可以将相关账户信息发送邮件至 member@group.coderplanets.com,
      客服会尽快为您处理。
    </Desc>
    <Divider />
    <Title>资金的主要用途是什么？(软件还要钱 ??)</Title>
    <Desc>
      coderplanets 目前的团队规模是非全职的个位数,
      无法仅靠情怀支撑巨大的时间/物质成本,
      您的资助将主要用于网站的开发/维护/运营等, 使平台变得更稳定,
      更好的服务像你我一样的广大 IT 从业者。
    </Desc>
    <Divider />
    <Title>还有什么福利吗 ？</Title>
    <Desc>
      除了会员的各种服务以外，捐助 500
      元以上者可以在感谢页面留下您的足迹，详情查看。
    </Desc>
  </Wrapper>
)

export default React.memo(QuestionContent)
