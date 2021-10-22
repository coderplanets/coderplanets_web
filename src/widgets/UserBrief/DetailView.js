import React from 'react'

import { ICON_CMD } from '@/config'

// import { ICON_CMD } from '@/config'
// import { Wrapper } from './styles'
import { UserDetailDesc, DescLabel, DescIconLabel, ToggleText } from './styles'
import BackgroundList from './BackgroundList'

const DetailView = ({ user, toggleDetail }) => (
  <>
    <UserDetailDesc>
      <DescLabel>个人介绍 </DescLabel>
      {user.bio}
    </UserDetailDesc>
    <UserDetailDesc>
      <DescLabel>所在城市</DescLabel> {user.location}
    </UserDetailDesc>
    <UserDetailDesc>
      <DescLabel>职业经历</DescLabel>
      <BackgroundList type="work" user={user} />
    </UserDetailDesc>
    <UserDetailDesc>
      <DescLabel>教育经历</DescLabel>
      <BackgroundList type="education" user={user} />
    </UserDetailDesc>
    <UserDetailDesc>
      <DescLabel>个人主页</DescLabel> {user.github}
    </UserDetailDesc>
    <UserDetailDesc onClick={() => toggleDetail()} clickable>
      <DescIconLabel src={`${ICON_CMD}/profile_arrow.svg`} />
      <ToggleText>收起详细资料</ToggleText>
    </UserDetailDesc>
  </>
)

export default React.memo(DetailView)
