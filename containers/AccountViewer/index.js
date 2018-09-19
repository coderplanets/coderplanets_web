/*
 *
 * AccountViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
// import Link from 'next/link'
import { Tabs } from 'antd'
import ReactTooltip from 'react-tooltip'

import { ThemeSelector, UserBrief } from '../../components'

import SiteSocial from './SiteSocial'
import Planets from './Planets'
import ContributeMap from './ContributeMap'

import {
  AccountWrapper,
  AccountContent,
  ThemeWrapper,
  Divider,
  PanerWrapper,
} from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AccountViewer')
/* eslint-enable no-unused-vars */

const { TabPane } = Tabs

const ThemeSection = ({ curTheme }) => (
  <ThemeWrapper>
    <ThemeSelector curTheme={curTheme} changeTheme={logic.changeTheme} />
  </ThemeWrapper>
)

class AccountViewerContainer extends React.Component {
  componentWillMount() {
    const { accountViewer } = this.props
    logic.init(accountViewer)
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
      accountViewer: { curTheme, accountInfo, subscribedCommunities },
    } = this.props

    const { contributes } = accountInfo

    return (
      <AccountWrapper>
        <ReactTooltip effect="solid" place="bottom" />
        <AccountContent>
          <UserBrief
            user={accountInfo}
            displayStyle="sidebar"
            showEdit
            onEdit={logic.editProfile}
          />

          <Divider top="20px" bottom="0px" />
          <SiteSocial />
          <Divider top="0px" bottom="20px" />
          <Planets subscribedCommunities={subscribedCommunities} />
          <Divider top="10px" bottom="20px" />

          <ContributeMap data={contributes} />
          <Divider top="18px" />
          <Tabs onChange={debug} type="card">
            <TabPane tab="最近" key="1">
              <PanerWrapper>Content of Tab Pane 1</PanerWrapper>
            </TabPane>
            <TabPane tab="收藏 456" key="2">
              <PanerWrapper>Content of Tab Pane 2</PanerWrapper>
            </TabPane>
            <TabPane tab="关注中 34" key="4">
              <PanerWrapper>Content of Tab Pane 3</PanerWrapper>
            </TabPane>
            <TabPane tab="关注者 28" key="5">
              <PanerWrapper>Content of Tab Pane 4</PanerWrapper>
            </TabPane>
          </Tabs>
        </AccountContent>

        {/* TODO if is others preview, then not show this */}
        <Divider top="10px" bottom="12px" />
        <ThemeSection curTheme={curTheme} />
      </AccountWrapper>
    )
  }
}

export default inject(storePlug('accountViewer'))(
  observer(AccountViewerContainer)
)
