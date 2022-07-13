import { FC, memo } from 'react'
import { includes, reject, clone } from 'ramda'

import { THREAD } from '@/constant'
import ColorSelector from '@/widgets/ColorSelector'
import { SpaceGrow, Br } from '@/widgets/Common'
import ToggleSwitch from '@/widgets/Buttons/ToggleSwitch'

import type { TWidgetsSettings, TTouched } from '../spec'
import { SETTING_FIELD } from '../constant'

import SectionLabel from '../SectionLabel'
import SavingBar from '../SavingBar'

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
import { TThread } from '@/spec'

type TProps = {
  touched: TTouched
  settings: TWidgetsSettings
}

const BaseSetting: FC<TProps> = ({ settings, touched }) => {
  const { widgetsPrimaryColor: primaryColor, widgetsThreads, saving } = settings

  const threadOnChange = (checked: boolean, thread: TThread): void => {
    const newThreads = checked
      ? [...widgetsThreads, thread]
      : reject((t) => t === thread, clone(widgetsThreads))

    edit(newThreads, 'widgetsThreads')
  }

  return (
    <Wrapper>
      <SectionLabel
        title="组件主题色"
        desc="默认与当前社区设置的主题色相一致。"
      />
      <SavingBar
        isTouched={touched.widgetsPrimaryColor}
        field={SETTING_FIELD.WIDGETS_PRIMARY_COLOR}
        loading={saving}
      >
        <Label color={primaryColor}>
          <ColorSelector
            activeColor={primaryColor}
            onChange={(color) => edit(color, 'widgetsPrimaryColor')}
            placement="right"
            offset={[-1, 15]}
          >
            <TheColor color={primaryColor} />
          </ColorSelector>
        </Label>
      </SavingBar>

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
            <ToggleSwitch
              checked={includes(THREAD.POST, widgetsThreads)}
              onChange={(checked) => threadOnChange(checked, THREAD.POST)}
            />
          </Header>
          <Desc>社区内全部帖子列表</Desc>
        </Section>
        <Section>
          <Header>
            <ThreadTitle>看板</ThreadTitle>
            <SpaceGrow />
            <ToggleSwitch
              checked={includes(THREAD.KANBAN, widgetsThreads)}
              onChange={(checked) => threadOnChange(checked, THREAD.KANBAN)}
            />
          </Header>
          <Desc>社区内看板内容，包含GTD标签</Desc>
        </Section>
        <Section>
          <Header>
            <ThreadTitle>更新日志</ThreadTitle>
            <SpaceGrow />
            <ToggleSwitch
              checked={includes(THREAD.CHANGELOG, widgetsThreads)}
              onChange={(checked) => threadOnChange(checked, THREAD.CHANGELOG)}
            />
          </Header>
          <Desc>最新版本以及历史发布版本</Desc>
        </Section>
        <Section>
          <Header>
            <ThreadTitle>帮助台</ThreadTitle>
            <SpaceGrow />
            <ToggleSwitch
              checked={includes(THREAD.HELP, widgetsThreads)}
              onChange={(checked) => threadOnChange(checked, THREAD.HELP)}
            />
          </Header>
          <Desc>常见问题与帮助中心文档</Desc>
        </Section>
      </ThreadsWrapper>

      <Br top={touched.widgetsThreads ? 20 : 70} />

      <SavingBar
        isTouched={touched.widgetsThreads}
        field={SETTING_FIELD.WIDGETS_THREADS}
        loading={saving}
        bottom={40}
      />
    </Wrapper>
  )
}

export default memo(BaseSetting)
