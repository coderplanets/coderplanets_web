import { FC, memo } from 'react'

import {
  Wrapper,
  Title,
  Inputer,
  HintWrapper,
  Hint,
} from '../styles/content/rss_inputer'

const RSSInputer: FC = () => {
  return (
    <Wrapper>
      <Title>请输入博客 RSS 地址</Title>
      <Inputer placeholder="// 例如：https://example.com/blog/atom.xml" />
      <HintWrapper>
        <Hint>支持 RSS 2.0 以及 Atom 格式</Hint>
        <Hint>已提交的博客会同时保存历史 Feed, 方便关联查看。</Hint>
        <Hint>已提交的 rss 记录每天会定时更新，可能会有滞后。</Hint>
      </HintWrapper>
    </Wrapper>
  )
}

export default memo(RSSInputer)
