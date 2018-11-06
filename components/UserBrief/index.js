/*
 *
 * UserBrief
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
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

class UserBrief extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  state = {
    showDetail: false,
  }

  toggleDetail() {
    this.setState(prevState => ({
      showDetail: !prevState.showDetail,
    }))
  }

  render() {
    const { showDetail } = this.state
    const { user, displayStyle, showEdit, onEdit } = this.props

    return (
      <Wrapper>
        <AvatarWrapper>
          <Avatar src={user.avatar} displayStyle={displayStyle} />
          <Button size="small" type="primary" ghost>
            升级账户
          </Button>
        </AvatarWrapper>

        <BriefTextWrapper>
          <UserTitle>
            {user.nickname}
            <EditWrapper show={showEdit} onClick={onEdit}>
              <EditIcon src={`${ICON_CMD}/edit.svg`} />
            </EditWrapper>
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
  showEdit: PropTypes.bool,
  onEdit: PropTypes.func,
}

UserBrief.defaultProps = {
  showEdit: false,
  displayStyle: 'default',
  onEdit: debug,
}

export default UserBrief
