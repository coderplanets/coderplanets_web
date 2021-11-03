import { FC, memo } from 'react'

import { Wrapper, Title, Ul, Li } from '../styles/publish_rules'

const PublishRules: FC = () => {
  return (
    <Wrapper>
      <Ul>
        <Title>规则与边界</Title>
        <Li>
          这里仅限发布技术动态，科技新闻，业界言论等资讯，相关资讯会被同步到关联的子社区中。
        </Li>
        <Li>
          请勿对资讯内容进行全文转载或翻译，概括描述以及个人见解是推荐的方式。
        </Li>
        <Li>请尽量找到资讯源头，而不是几经传播的 N 手消息，并附上原始链接。</Li>
        <Li>发布卖课，培训等资讯会被一刀切，永久封号。</Li>
        <Li>请根据分享的内容选择合适的标签以及子社区。</Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(PublishRules)
