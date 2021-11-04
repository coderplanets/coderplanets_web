import { FC, memo } from 'react'

import { Wrapper, Title, Ul, Li } from '../styles/publish_rules'

const PublishRules: FC = () => {
  return (
    <Wrapper>
      <Ul>
        <Title>规则与边界</Title>
        <Li>友善是一切有意义讨论的基础和前提。Don&apos;t be an asshole.</Li>
        <Li>
          如果是寻求解答，请务必提供上下文、需求场景等必要信息, 并勾选发布上方的
          “求助 / 提问” 选框。这里崇尚具体、实际的问题，请慎用 “如何看待 xxx”
          开头。
        </Li>
        <Li>
          卖课，领资料，公众号引流等骚操作一月禁言起步。多次发布，停止服务。
        </Li>
        <Li>
          请尊重自己和他人的时间，不要发布无意义的黑话 / 烂梗 / Trash Talk
          以及语焉不详的一句话问题等。
        </Li>
        <Li>遵法守纪，尊重版权，尊重事实。勿议国是，不搞沸腾，不乱贴标签。</Li>
        <Li>
          如果不确定内容该发布到哪个社区，可以先发布到 /draft，并 @
          相关社区的志愿者，他们很乐于给你反馈。
        </Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(PublishRules)
