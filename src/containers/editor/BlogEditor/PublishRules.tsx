import { FC, memo } from 'react'

import { Wrapper, Title, Ul, Li } from './styles/publish_rules'

const PublishRules: FC = () => {
  return (
    <Wrapper>
      <Ul>
        <Title>常见问题</Title>
        <Li>博客摘要来自于目标博客公开的 RSS 订阅列表，不存在任何爬虫技术。</Li>
        <Li>目前不支持不提供 RSS 的博客或私有平台内容。</Li>
        <Li>本站的基本价值观同样适用于提交到这里的博客。</Li>
        <Li>
          请将对应的博客主题发布到对应的社区及标签下，如有疑问可以先发布到
          /draft 社区并 @ 相应志愿者，他们很乐于给你反馈。
        </Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(PublishRules)
