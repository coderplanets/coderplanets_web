/*
 *
 * UserLister
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Modal } from '../../components'
import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import HeaderInfo from './HeaderInfo'
import UserList from './UserList'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserLister')
/* eslint-enable no-unused-vars */

class UserListerContainer extends React.Component {
  componentWillMount() {
    const { userLister } = this.props
    logic.init(userLister)
  }

  render() {
    const { userLister } = this.props
    const { show, type, pagedUsersData, accountInfo } = userLister

    return (
      <Modal width="700px" show={show} showCloseBtn onClose={logic.onClose}>
        <Wrapper>
          <HeaderInfo type={type} totalCount={pagedUsersData.totalCount} />
          <UserList
            data={pagedUsersData}
            accountInfo={accountInfo}
            onPageChange={logic.onPageChange}
          />
        </Wrapper>
      </Modal>
    )
  }
}

export default inject(storePlug('userLister'))(observer(UserListerContainer))
