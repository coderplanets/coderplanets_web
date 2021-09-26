import { FC, memo } from 'react'

import { Wrapper, Title, Ul, Li } from './styles/publish_rules'

const PublishRules: FC = () => {
  return (
    <Wrapper>
      <Ul>
        <Title>常见问题</Title>
        <Li>版权声明: 提交内容来自目标博客的公开 RSS 信息</Li>
        <Li>
          请将对应的博客主题发布到对应的社区及标签下，如有疑问可以先发布到
          /draft 社区并 @ 相应志愿者，他们很乐于给你反馈。
        </Li>
        <Li>目前暂不支持不提供 RSS 的博客或私有平台。</Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(PublishRules)
