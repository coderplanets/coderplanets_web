/*
 *
 * C11NSettingPanel
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'
import GeneralSettings from './GeneralSettings'

import Tabber from '@/components/Tabber'

import { Wrapper, TabberWrapper } from './styles'
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

const C11NSettingPanelContainer = ({ c11NSettingPanel: store }) => {
  useInit(store)

  const { activeTab, accountInfo, curThread } = store
  const { customization } = accountInfo

  return (
    <Wrapper testId="c11NSettingPanel">
      <TabberWrapper>
        <Tabber
          source={TAB_OPTIONS}
          onChange={tabOnChange}
          active={activeTab}
        />
      </TabberWrapper>
      <GeneralSettings curThread={curThread} customization={customization} />
    </Wrapper>
  )
}

export default connectStore(C11NSettingPanelContainer)
