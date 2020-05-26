/*
 *
 * UserBanner
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import UserBrief from '@/components/UserBrief'
import UserContributeMap from './UserContributeMap'

import {
  BannerContainer,
  BannerContentWrapper,
  UserBriefWrapper,
  UserContributesWrapper,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserBanner')

const UserBannerContainer = ({ userBanner: store }) => {
  useInit(store)

  const { viewingUser } = store

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

export default connectStore(UserBannerContainer)
