/*
 *
 * UserLister
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Modal } from '../../components'
import { Wrapper, Header, Title, Desc } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import UserList from './UserList'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserLister')
/* eslint-enable no-unused-vars */

// NOTE: add me to ../containers/index
class UserListerContainer extends React.Component {
  componentWillMount() {
    const { userLister } = this.props
    logic.init(userLister)
  }

  render() {
    const { userLister } = this.props
    const { show, pagedUsersData } = userLister

    return (
      <Modal width="700px" show={show} showCloseBtn onClose={logic.onClose}>
        <Wrapper>
          <Header>
            <Title>社区编辑</Title>
            <Desc>
              xxx 社区共有编辑/志愿者 14 人，同时对所有感兴趣的朋友开放, ...
              详情
            </Desc>
          </Header>
          <UserList data={pagedUsersData} />
        </Wrapper>
      </Modal>
    )
  }
}

export default inject(storePlug('userLister'))(observer(UserListerContainer))
