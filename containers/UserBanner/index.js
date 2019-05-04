/*
 *
 * UserBanner
 *
 */

import React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { makeDebugger, storePlug } from 'utils'

import UserBrief from 'components/UserBrief'
import UserContributeMap from './UserContributeMap'

import {
  BannerContainer,
  BannerContentWrapper,
  UserBriefWrapper,
  UserContributesWrapper,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:UserBanner')

const UserBannerContainer = ({ userBanner }) => {
  useInit(userBanner)

  const { viewingUser } = userBanner

  return (
    <BannerContainer>
      <BannerContentWrapper>
        <UserBriefWrapper>
          <UserBrief user={viewingUser} />
        </UserBriefWrapper>
        <UserContributesWrapper>
          <UserContributeMap data={viewingUser.contributes} />
        </UserContributesWrapper>
      </BannerContentWrapper>
    </BannerContainer>
  )
}

export default inject(storePlug('userBanner'))(observer(UserBannerContainer))
