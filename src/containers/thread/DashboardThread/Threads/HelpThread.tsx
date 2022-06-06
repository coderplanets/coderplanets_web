import { FC, memo } from 'react'

import { SpaceGrow } from '@/widgets/Common'
import ToggleSwitch from '@/widgets/Buttons/ToggleSwitch'

import {
  Wrapper,
  Section,
  Section2,
  Header,
  Title,
  Desc,
} from '../styles/threads/help_thread'

const HelpThread: FC = () => {
  return (
    <Wrapper>
      <Section>
        <Header>
          <Title>常见问题</Title>
          <SpaceGrow />
          <ToggleSwitch checked />
        </Header>
        <Desc>FAQ 列表，适合常见的一句话问答等，参考 xxx</Desc>
      </Section>

      <Section2>
        <Header>
          <Title>文档集</Title>
          <SpaceGrow />
          <ToggleSwitch />
        </Header>
        <Desc>适合中长篇文档，支持富文本，目录树，TOC 等常见文档功能。</Desc>
      </Section2>
    </Wrapper>
  )
}

export default memo(HelpThread)
