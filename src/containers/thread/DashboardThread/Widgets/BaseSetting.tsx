import { FC, memo } from 'react'

import ColorSelector from '@/widgets/ColorSelector'
import { SpaceGrow, Br } from '@/widgets/Common'
import ToggleSwitch from '@/widgets/Buttons/ToggleSwitch'

import SectionLabel from '../SectionLabel'

import {
  Wrapper,
  Label,
  TheColor,
  ThreadsWrapper,
  Section,
  Header,
  ThreadTitle,
  Desc,
} from '../styles/widgets/base_setting'

import { edit } from '../logic'

const BaseSetting: FC = () => {
  const primaryColor = 'BLACK'

  return (
    <Wrapper>
      <SectionLabel
        title="组件主题色"
        desc="默认与当前社区设置的主题色相一致。"
      />
      <Label color={primaryColor}>
        <ColorSelector
          activeColor={primaryColor}
          onChange={(color) => edit(color, 'primaryColor')}
          placement="right"
          offset={[-1, 15]}
        >
          <TheColor color={primaryColor} />
        </ColorSelector>
      </Label>

      <Br top={35} />
      <SectionLabel
        title="展示板块"
        desc="被勾选的板块会在组件中以 Tab 形式展示相关内容，展示样式与‘社区板块’中的设置保持一致"
      />

      <ThreadsWrapper>
        <Section>
          <Header>
            <ThreadTitle>讨论</ThreadTitle>
            <SpaceGrow />
            <ToggleSwitch checked />
          </Header>
          <Desc>社区内全部帖子列表</Desc>
        </Section>
        <Section>
          <Header>
            <ThreadTitle>看板</ThreadTitle>
            <SpaceGrow />
            <ToggleSwitch checked />
          </Header>
          <Desc>社区内看板内容，包含GTD标签</Desc>
        </Section>
        <Section>
          <Header>
            <ThreadTitle>更新日志</ThreadTitle>
            <SpaceGrow />
            <ToggleSwitch checked />
          </Header>
          <Desc>最新版本以及历史发布版本</Desc>
        </Section>
        <Section>
          <Header>
            <ThreadTitle>帮助台</ThreadTitle>
            <SpaceGrow />
            <ToggleSwitch />
          </Header>
          <Desc>常见问题与帮助中心文档</Desc>
        </Section>
      </ThreadsWrapper>
    </Wrapper>
  )
}

export default memo(BaseSetting)
