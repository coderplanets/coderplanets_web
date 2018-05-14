/*
 *
 * AccountViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
// import Link from 'next/link'
import ReactTooltip from 'react-tooltip'

import { makeDebugger, storePlug } from '../../utils'

import { Tabs, ThemeSelector } from '../../components'

import UserHeader from './UserHeader'
import Planets from './Planets'
import ContributeMap from './ContributeMap'

import { AccountWrapper, AccountContent, ThemeWrapper, Divider } from './styles'
import * as logic from './logic'

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
  componentDidMount() {
    /* force rebuild the tooltip, otherwise it won't work in some async cases */
    /* if you want to custom see: */
    /* https://github.com/wwayne/react-tooltip/blob/2364dc61332aa947b106dd4bbdd1f2b0e4b1e51d/src/index.scss */
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 2000)
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
        <ReactTooltip effect="solid" place="bottom" />
        <AccountContent>
          <UserHeader
            accountInfo={accountInfo}
            logout={logic.logout}
            editProfile={logic.editProfile}
          />
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

export default inject(storePlug('accountViewer'))(
  observer(AccountViewerContainer)
)
