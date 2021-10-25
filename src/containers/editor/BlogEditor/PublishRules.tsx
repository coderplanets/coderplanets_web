import { FC, memo } from 'react'

import { Wrapper, Title, Ul, Li } from './styles/publish_rules'

const PublishRules: FC = () => {
  return (
    <Wrapper>
      <Ul>
        <Title>常见问题</Title>
        <Li>博客摘要来自于目标博客公开的 RSS 订阅列表，不涉及爬虫。</Li>
        <Li>目前不支持不提供公开 RSS 的博客或私有平台内容。</Li>
        <Li>
          提交时请选择你认为关联的标签，如果没有, 请在 /feedback
          提交反馈或建议。
        </Li>
        <Li>卖课，领资料，公众号引流等一月禁言起步。多次发布，停止服务。</Li>
        <Li>
          请将对应的博客主题发布到对应的社区及标签下，如有疑问可以先发布到
          /draft 社区并 @ 相应志愿者，他们很乐于给你反馈。
        </Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(PublishRules)
