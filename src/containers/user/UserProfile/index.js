//

/*
 *
 * UserProfile
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import NumbersPad from './NumbersPad'
import ContributeMap from './ContributeMap'
import SubscribedCommunities from './SubscribedCommunities'

import { Wrapper, ContributesWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserProfile')

const UserProfileContainer = ({ userProfile: store, testId }) => {
  useInit(store)

  const { viewingUser } = store
  // console.log('# viewingUser: ', viewingUser)

  return (
    <Wrapper testId={testId}>
      <NumbersPad user={viewingUser} />
      <ContributesWrapper>
        <ContributeMap data={viewingUser.contributes} />
      </ContributesWrapper>

      <SubscribedCommunities items={viewingUser.subscribedCommunities} />
    </Wrapper>
  )
}

UserProfileContainer.propTypes = {
  userProfile: T.any.isRequired,
  testId: T.string,
}

UserProfileContainer.defaultProps = {
  testId: 'user-profile',
}

export default connectStore(UserProfileContainer)
