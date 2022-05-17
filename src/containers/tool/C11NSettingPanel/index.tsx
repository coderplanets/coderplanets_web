/*
 *
 * C11NSettingPanel
 *
 */

import { FC } from 'react'

import { ICON_CMD } from '@/config'
import { VIEW } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import { Tabs } from '@/widgets/Switcher'
import type { TStore } from './store'

import GeneralSettings from './GeneralSettings'
import ThemeSettings from './ThemeSettings'

import { Wrapper, Title, TabBarWrapper, ContentWrapper } from './styles'
import { useInit, tabOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:C11NSettingPanel')

const TAB_OPTIONS = [
  {
    title: '常规设置',
    raw: 'general',
    localIcon: 'settings',
  },
  {
    title: '主题设置',
    raw: 'theme',
    icon: `${ICON_CMD}/theme_cloth.svg`,
  },
]

const Content = ({ activeTab, curTheme, curThread, customization }) => {
  switch (activeTab) {
    case 'general': {
      return (
        <GeneralSettings curThread={curThread} customization={customization} />
      )
    }
    case 'theme': {
      return <ThemeSettings curTheme={curTheme} />
    }
    default: {
      return <div>WoW</div>
    }
  }
}

type TProps = {
  c11NSettingPanel?: TStore
}

const C11NSettingPanelContainer: FC<TProps> = ({ c11NSettingPanel: store }) => {
  useInit(store)

  const { activeTab, accountInfo, curThread, curTheme } = store
  const { customization } = accountInfo

  return (
    <Wrapper testid="c11NSettingPanel">
      <br />
      <Title>个性化设置</Title>
      <TabBarWrapper>
        <Tabs
          items={TAB_OPTIONS}
          activeKey={activeTab}
          onChange={tabOnChange}
          view={VIEW.DRAWER}
        />
      </TabBarWrapper>
      <ContentWrapper>
        <Content
          activeTab={activeTab}
          curThread={curThread}
          customization={customization}
          curTheme={curTheme}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default bond(C11NSettingPanelContainer, 'c11NSettingPanel') as FC<TProps>
