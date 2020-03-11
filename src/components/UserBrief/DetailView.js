import React from 'react'

import { ICON_CMD } from '@config'

// import { ICON_CMD } from '@config'
// import { Wrapper } from './styles'
import { UserDetailDesc, DescLable, DescIconLable, ToggleText } from './styles'
import BackgroundList from './BackgroundList'

const DetailView = ({ user, toggleDetail }) => (
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
      <DescLable>个人主页</DescLable> {user.github}
    </UserDetailDesc>
    <UserDetailDesc onClick={toggleDetail.bind(this)} clickable>
      <DescIconLable src={`${ICON_CMD}/profile_arrow.svg`} />
      <ToggleText>收起详细资料</ToggleText>
    </UserDetailDesc>
  </React.Fragment>
)

export default React.memo(DetailView)
