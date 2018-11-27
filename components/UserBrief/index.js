/*
 *
 * UserBrief
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Button } from 'antd'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  BriefTextWrapper,
  UserTitle,
  UserDesc,
  SocialSpliter,
  EditIcon,
  EditWrapper,
} from './styles'

import SocialIcons from './SocialIcons'
import DetailView from './DetailView'
import DigestView from './DigestView'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:UserBrief')
/* eslint-enable no-unused-vars */

const DEFAULT_USER_ICON = `${ICON_CMD}/alien_user3.svg`

class UserBrief extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showDetail: false }
  }

  toggleDetail() {
    this.setState(prevState => ({
      showDetail: !prevState.showDetail,
    }))
  }

  render() {
    const { showDetail } = this.state
    const { user, displayStyle, showEdit, onEdit, viewingType } = this.props

    return (
      <Wrapper>
        <AvatarWrapper>
          <Link href={`/user/${user.id}`}>
            <div>
              <Avatar
                src={user.avatar || DEFAULT_USER_ICON}
                displayStyle={displayStyle}
              />
            </div>
          </Link>

          {viewingType === 'account' ? (
            <Button size="small" type="primary" ghost>
              升级账户
            </Button>
          ) : null}
        </AvatarWrapper>

        <BriefTextWrapper>
          <UserTitle>
            {user.nickname}
            {viewingType === 'account' ? (
              <EditWrapper show={showEdit} onClick={onEdit}>
                <EditIcon src={`${ICON_CMD}/edit.svg`} />
              </EditWrapper>
            ) : null}
          </UserTitle>
          {showDetail ? (
            <DetailView
              user={user}
              toggleDetail={this.toggleDetail.bind(this)}
            />
          ) : (
            <DigestView
              user={user}
              toggleDetail={this.toggleDetail.bind(this)}
            />
          )}
          <SocialSpliter />
          <UserDesc>
            <SocialIcons user={user} />
          </UserDesc>
        </BriefTextWrapper>
      </Wrapper>
    )
  }
}

UserBrief.propTypes = {
  user: PropTypes.object.isRequired,
  displayStyle: PropTypes.oneOf(['default', 'sidebar']),
  viewingType: PropTypes.oneOf(['account', 'user']),
  showEdit: PropTypes.bool,
  onEdit: PropTypes.func,
}

UserBrief.defaultProps = {
  showEdit: false,
  displayStyle: 'default',
  viewingType: 'user',
  onEdit: debug,
}

export default UserBrief
