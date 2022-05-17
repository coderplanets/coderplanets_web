/* *
 * CustomBgEditor
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { VIEW } from '@/constant'
import { Tabs } from '@/widgets/Switcher'

import type { TStore } from './store'
import { Wrapper, Content, Title } from './styles'
import PicGroup from './PicGroup'
import { useInit } from './logic' /* eslint-disable-next-line */

const TAB_OPTIONS = [
  {
    title: '内置背景',
    raw: 'buildin',
    localIcon: 'settings',
  },
  {
    title: '自定义图片',
    raw: 'custom',
    localIcon: 'settings',
  },
]

type TProps = {
  customBgEditor?: TStore
  testid?: string
}

const CustomBgEditorContainer: FC<TProps> = ({
  customBgEditor: store,
  testid = 'custom-bg-editor',
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <Title>背景设置</Title>
      <div>
        <Tabs
          items={TAB_OPTIONS}
          activeKey="buildin"
          onChange={console.log}
          view={VIEW.DRAWER}
        />
      </div>
      <Content>
        <div>图案</div>
        <PicGroup />

        <br />
        <div>纯色</div>
        <div>...</div>
      </Content>
    </Wrapper>
  )
}

export default bond(CustomBgEditorContainer, 'customBgEditor') as FC<TProps>
