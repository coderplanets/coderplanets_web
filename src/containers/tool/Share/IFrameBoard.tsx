import { FC, memo } from 'react'

import CopyButton from '@/widgets/Buttons/CopyButton'

import {
  Wrapper,
  Header,
  Title,
  CodeWrapper,
  Inputer,
} from './styles/iframe_board'

const IFrameBoard: FC = () => {
  const code =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/5KnkUBBVqis" title="YouTube video player" frameborder="0"></iframe>'
  return (
    <Wrapper>
      <Header>
        <Title>嵌入网页</Title>
        <CopyButton value={code} />
      </Header>
      <CodeWrapper>
        <Inputer behavior="textarea" value={code} />
      </CodeWrapper>
    </Wrapper>
  )
}

export default memo(IFrameBoard)
