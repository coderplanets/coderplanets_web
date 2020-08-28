/*
 *
 * C11NSettingPanel
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import TabBar from '@/components/TabBar'
import GeneralSettings from './GeneralSettings'
import ThemeSettings from './ThemeSettings'

import { Wrapper, TabBarWrapper } from './styles'
import { useInit, tabOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:C11NSettingPanel')

const TAB_OPTIONS = [
  {
    title: '常规设置',
    raw: 'general',
  },
  {
    title: '主题设置',
    raw: 'theme',
  },
]

const Content = ({ activeTab, curTheme, ...restProps }) => {
  switch (activeTab) {
    case 'general': {
      return <GeneralSettings {...restProps} />
    }
    case 'theme': {
      return <ThemeSettings curTheme={curTheme} />
    }
    default: {
      return <div>WoW</div>
    }
  }
}

const C11NSettingPanelContainer = ({ c11NSettingPanel: store }) => {
  useInit(store)

  const { activeTab, accountInfo, curThread, curTheme } = store
  const { customization } = accountInfo

  return (
    <Wrapper testId="c11NSettingPanel">
      <TabBarWrapper>
        <TabBar
          source={TAB_OPTIONS}
          onChange={tabOnChange}
          active={activeTab}
        />
      </TabBarWrapper>
      <Content
        activeTab={activeTab}
        curThread={curThread}
        customization={customization}
        curTheme={curTheme}
      />
    </Wrapper>
  )
}

export default connectStore(C11NSettingPanelContainer)
