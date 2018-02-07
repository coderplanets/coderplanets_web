/*
*
* AccountViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'

import UserHeader from './UserHeader'
import Planets from './Planets'
import ContributeMap from './ContributeMap'
import ThemeSelector from '../../components/ThemeSelector'
import { AccountWrapper, AccountContent, ThemeWrapper, Divider } from './styles'

const debug = makeDebugger('C:AccountViewer')

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
    debug('mount')
    logic.init(this.props.accountViewer)
  }

  render() {
    const { themeKeys, curTheme } = this.props.accountViewer

    return (
      <AccountWrapper>
        <AccountContent>
          <UserHeader />
          <Divider top="10px" bottom="20px" />
          <Planets />
          <Divider top="10px" bottom="20px" />
          <ContributeMap />
          <Divider top="18px" />
          <div style={{ display: 'none' }}>
            <h2>This is Header</h2>
            <div>
              <h3>mydearxym 登录信息</h3>
              <h3>个人介绍</h3>
              <h3>订阅的社区</h3>
              <h3>我的收藏</h3>
              <h3>我的帖子</h3>
              <h3>我的关注</h3>
              <h3>关注我的人</h3>
              <h3>主题切换</h3>
              <h3>最近七天日历活动表</h3>
            </div>
          </div>
        </AccountContent>
        <Divider top="10px" bottom="12px" />
        <ThemeSection themeKeys={themeKeys} curTheme={curTheme} />
      </AccountWrapper>
    )
  }
}

export default inject(storeSelector('accountViewer'))(
  observer(AccountViewerContainer)
)
