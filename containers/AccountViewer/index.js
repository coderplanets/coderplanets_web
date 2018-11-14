/*
 *
 * AccountViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import R from 'ramda'
import ReactTooltip from 'react-tooltip'

import { ThemeSelector, UserBrief, Maybe } from '../../components'

import SiteSocial from './SiteSocial'
import Planets from './Planets'
import ContributeMap from './ContributeMap'

import { AccountWrapper, AccountContent, ThemeWrapper, Divider } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AccountViewer')
/* eslint-enable no-unused-vars */

const ThemeSection = ({ curTheme }) => (
  <ThemeWrapper>
    <ThemeSelector curTheme={curTheme} changeTheme={logic.changeTheme} />
  </ThemeWrapper>
)

class AccountViewerContainer extends React.Component {
  constructor(props) {
    super(props)
    const { accountViewer } = props
    logic.init(accountViewer)
    logic.loadAccount()

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
    // debug('contributes --> ', contributes)

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
          <SiteSocial user={accountInfo} />
          <Maybe test={!R.isEmpty(subscribedCommunities)}>
            <React.Fragment>
              <Divider top="0px" bottom="20px" />
              <Planets subscribedCommunities={subscribedCommunities} />
            </React.Fragment>
          </Maybe>
          <Divider top="10px" bottom="20px" />

          <ContributeMap data={contributes} />
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
