//

/*
 *
 * UserProfile
 *
 */

import React from 'react'
import T from 'prop-types'

import { pluggedIn, buildLog } from '@/utils'

import NumbersPad from './NumbersPad'
import ContributeMap from './ContributeMap'
import SubscribedCommunities from './SubscribedCommunities'
import Activities from './Activities'

import { Wrapper, ContributesWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserProfile')

const UserProfileContainer = ({ userProfile: store, testid }) => {
  useInit(store)

  const { viewingUser } = store
  // console.log('# viewingUser: ', viewingUser)

  return (
    <Wrapper testid={testid}>
      <NumbersPad user={viewingUser} />
      <ContributesWrapper>
        <ContributeMap data={viewingUser.contributes} />
      </ContributesWrapper>

      <SubscribedCommunities items={viewingUser.subscribedCommunities} />
      <Activities />
    </Wrapper>
  )
}

UserProfileContainer.propTypes = {
  userProfile: T.any.isRequired,
  testid: T.string,
}

UserProfileContainer.defaultProps = {
  testid: 'user-profile',
}

export default pluggedIn(UserProfileContainer)
