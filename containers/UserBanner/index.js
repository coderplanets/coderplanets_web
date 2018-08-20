/*
 *
 * UserBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storePlug } from '../../utils'
import {
  BannerContainer,
  BannerContentWrapper,
  UserBriefWrapper,
  UserContributesWrapper,
} from './styles'

import UserBrief from './UserBrief'
import UserContributeMap from './UserContributeMap'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserBanner')
/* eslint-enable no-unused-vars */

const fakeRecors = {
  endDate: '2018-07-07',
  startDate: '2018-01-07',
  totalCount: 70,

  records: [
    { date: '2018-03-11', count: 1 },
    { date: '2018-03-10', count: 4 },
    { date: '2018-05-20', count: 29 },
    { date: '2018-05-21', count: 6 },
    { date: '2018-04-03', count: 18 },
    { date: '2017-03-11', count: 2 },
    { date: '2018-02-03', count: 10 },
  ],
}
class UserBannerContainer extends React.Component {
  componentWillMount() {
    const { userBanner } = this.props
    logic.init(userBanner)
  }

  render() {
    const { userBanner } = this.props
    const { viewingUser } = userBanner

    console.log('viewingUser: ', viewingUser)

    return (
      <BannerContainer>
        <BannerContentWrapper>
          <UserBriefWrapper>
            <UserBrief user={viewingUser} />
          </UserBriefWrapper>
          <UserContributesWrapper>
            <UserContributeMap data={fakeRecors} />
          </UserContributesWrapper>
        </BannerContentWrapper>
      </BannerContainer>
    )
  }
}

export default inject(storePlug('userBanner'))(observer(UserBannerContainer))
