/*
 *
 * AccountViewer
 *
 */

import React from 'react'
import R from 'ramda'
import ReactTooltip from 'react-tooltip'

import { connectStore, makelogger } from '@utils'

import Maybe from '@components/Maybe'
import ThemeSelector from '@components/ThemeSelector'
import UserBrief from '@components/UserBrief'

import SiteSocial from './SiteSocial'
import Planets from './Planets'
import ContributeMap from './ContributeMap'

import { AccountWrapper, AccountContent, ThemeWrapper, Divider } from './styles'

import { useInit, editProfile, onLogout, changeTheme } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:AccountViewer')

const AccountViewerContainer = ({ accountViewer, user }) => {
  useInit(accountViewer, user)

  const {
    curTheme,
    viewingType,
    userInfoData,
    subscribedCommunities,
  } = accountViewer

  const { contributes } = userInfoData // accountInfo

  return (
    <AccountWrapper>
      {!R.isEmpty(userInfoData.id) && (
        <React.Fragment>
          <ReactTooltip effect="solid" place="bottom" />
          <AccountContent>
            <UserBrief
              user={userInfoData}
              displayStyle="sidebar"
              viewingType={viewingType}
              onEdit={editProfile}
              onLogout={onLogout}
            />

            <Divider top="20px" bottom="0px" />
            <SiteSocial user={userInfoData} />
            <Maybe test={!R.isEmpty(subscribedCommunities)}>
              <React.Fragment>
                <Divider top="0px" bottom="20px" />
                <Planets
                  subscribedCommunities={subscribedCommunities}
                  viewingType={viewingType}
                />
              </React.Fragment>
            </Maybe>
            <Divider top="10px" bottom="20px" />

            <ContributeMap data={contributes} />
          </AccountContent>

          <Maybe test={viewingType === 'account'}>
            <React.Fragment>
              <Divider top="10px" bottom="12px" />
              <ThemeWrapper>
                <ThemeSelector curTheme={curTheme} changeTheme={changeTheme} />
              </ThemeWrapper>
            </React.Fragment>
          </Maybe>
        </React.Fragment>
      )}
    </AccountWrapper>
  )
}

export default connectStore(AccountViewerContainer)
