import { FC, memo } from 'react'

import { IconButton } from '@/components/Buttons'

import { Wrapper, Header, Title, CodeWrapper } from './styles/iframe_board'

const IFrameBoard: FC = () => {
  const code =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/5KnkUBBVqis" title="YouTube video player" frameborder="0"></iframe>'
  return (
    <Wrapper>
      <Header>
        <Title>嵌入网页</Title>
        <IconButton path="article/clipboard.svg" mRight={0} size={18} />
      </Header>
      <CodeWrapper>{code}</CodeWrapper>
    </Wrapper>
  )
}

export default memo(IFrameBoard)
