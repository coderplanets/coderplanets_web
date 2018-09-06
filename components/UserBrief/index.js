/*
 *
 * UserBrief
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '../../config'

import { makeDebugger, nilOrEmpty, SOCIAL_LISTS, uid } from '../../utils'
import { Button } from '..'

import BackgroundList from './BackgroundList'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  BriefTextWrapper,
  UserTitle,
  UserDesc,
  UserDetailDesc,
  DescLable,
  DescIconLable,
  DetailToggleLabel,
  ToggleText,
  SocialSpliter,
  SocialWrapper,
  SocialIcon,
  EditIcon,
  EditWrapper,
} from './styles'

/* import * as logic from './logic' */

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:UserBrief')
/* eslint-enable no-unused-vars */

const SocialIcons = ({ user }) => (
  <SocialWrapper>
    {SOCIAL_LISTS.map(social => (
      <SocialIcon
        key={uid.gen()}
        src={`${ICON_CMD}/${social.key}.svg`}
        active={!nilOrEmpty(user[social.key])}
      />
    ))}
  </SocialWrapper>
)

const emptyBacgrounds = R.either(R.isNil, R.isEmpty)

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
            <React.Fragment>
              <UserDetailDesc>
                <DescLable>个人介绍 </DescLable>
                {user.bio}
              </UserDetailDesc>
              <UserDetailDesc>
                <DescLable>所在城市</DescLable> {user.location}
              </UserDetailDesc>
              <UserDetailDesc>
                <DescLable>职业经历</DescLable>
                <BackgroundList type="work" user={user} />
              </UserDetailDesc>
              <UserDetailDesc>
                <DescLable>教育经历</DescLable>
                <BackgroundList type="education" user={user} />
              </UserDetailDesc>
              <UserDetailDesc>
                <DescLable>个人主页</DescLable> http://www.xxx.com/xxx
              </UserDetailDesc>
              <UserDetailDesc onClick={this.toggleDetail.bind(this)} clickable>
                <DescIconLable src={`${ICON_CMD}/profile_arrow.svg`} />
                <ToggleText>收起详细资料</ToggleText>
              </UserDetailDesc>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <UserDesc>
                <DescIconLable src={`${ICON_CMD}/profile_bio.svg`} />{' '}
                <div>{user.bio}</div>
              </UserDesc>
              <UserDesc>
                <DescIconLable src={`${ICON_CMD}/profile_location.svg`} />{' '}
                <div>{user.location}</div>
              </UserDesc>
              <UserDesc hide={emptyBacgrounds(user.workBackgrounds)}>
                <DescIconLable src={`${ICON_CMD}/profile_company.svg`} />{' '}
                <BackgroundList type="work" user={user} first />
              </UserDesc>
              <UserDesc hide={emptyBacgrounds(user.educationBackgrounds)}>
                <DescIconLable src={`${ICON_CMD}/profile_education.svg`} />{' '}
                <BackgroundList type="education" user={user} first />
              </UserDesc>
              <UserDesc onClick={this.toggleDetail.bind(this)} clickable>
                <DetailToggleLabel
                  src={`${ICON_CMD}/profile_arrow.svg`}
                  reverse
                />
                <ToggleText>查看详细资料</ToggleText>
              </UserDesc>
            </React.Fragment>
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
