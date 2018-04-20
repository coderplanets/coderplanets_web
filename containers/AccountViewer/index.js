/*
 *
 * AccountViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
// import Link from 'next/link'
import { Tabs } from 'antd'

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'

import UserHeader from './UserHeader'
import Planets from './Planets'
import ContributeMap from './ContributeMap'
import ThemeSelector from '../../components/ThemeSelector'
import { AccountWrapper, AccountContent, ThemeWrapper, Divider } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AccountViewer')
/* eslint-enable no-unused-vars */

const { TabPane } = Tabs

const ThemeSection = ({ themeKeys, curTheme }) => {
  return (
    <ThemeWrapper>
      <ThemeSelector
        themeKeys={themeKeys}
        curTheme={curTheme}
        changeTheme={logic.changeTheme}
      />
    </ThemeWrapper>
  )
}

class AccountViewerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.accountViewer)
    logic.loadAccount()
  }

  render() {
    const {
      themeKeys,
      curTheme,
      accountInfo,
      subscribedCommunities,
    } = this.props.accountViewer

    const { contributes } = accountInfo

    return (
      <AccountWrapper>
        <AccountContent>
          <UserHeader accountInfo={accountInfo} />
          <Divider top="10px" bottom="20px" />
          <Planets subscribedCommunities={subscribedCommunities} />
          <Divider top="10px" bottom="20px" />
          <ContributeMap data={contributes} />
          <Divider top="18px" />
          <Tabs onChange={console.log} type="card">
            <TabPane tab="最近" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="收藏 456" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="关注中 34" key="4">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="关注者 28" key="5">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </AccountContent>

        {/* TODO if is others preview, then not show this */}
        <Divider top="10px" bottom="12px" />
        <ThemeSection themeKeys={themeKeys} curTheme={curTheme} />
      </AccountWrapper>
    )
  }
}

export default inject(storeSelector('accountViewer'))(
  observer(AccountViewerContainer)
)
