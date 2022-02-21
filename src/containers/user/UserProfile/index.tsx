//

/*
 *
 * UserProfile
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import NumbersPad from './NumbersPad'
import ContributeMap from './ContributeMap'
import Activities from './Activities'

import type { TStore } from './store'
import { Wrapper, ContributesWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserProfile')

type TProps = {
  userProfile?: TStore
  testid?: string
}

const UserProfileContainer: FC<TProps> = ({
  userProfile: store,
  testid = 'user-profile',
}) => {
  useInit(store)

  const {
    viewingUser,
    pagedSubscribedCommunitiesData,
    activities,
    hasFollowedUser,
  } = store

  return (
    <Wrapper testid={testid}>
      <NumbersPad
        user={viewingUser}
        subscribedCommunities={pagedSubscribedCommunitiesData}
        hasFollowedUser={hasFollowedUser}
      />
      <ContributesWrapper>
        <ContributeMap user={viewingUser} />
      </ContributesWrapper>

      <Activities items={activities} />
    </Wrapper>
  )
}

export default bond(UserProfileContainer, 'userProfile') as FC<TProps>
