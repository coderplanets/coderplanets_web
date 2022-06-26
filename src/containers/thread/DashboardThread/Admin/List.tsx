import { FC, memo } from 'react'

import { mockUsers } from '@/utils/mock'

import { SpaceGrow } from '@/widgets/Common'
import DropdownButton from '@/widgets/Buttons/DropdownButton'
import AdminAvatar from '@/widgets/AdminAvatar'

import {
  Wrapper,
  User,
  Intro,
  Title,
  Name,
  Login,
  Bio,
} from '../styles/admin/list'

const List: FC = () => {
  return (
    <Wrapper>
      {mockUsers(5).map((item) => (
        <User key={item.login}>
          <AdminAvatar user={item} right={14} top={5} />
          <Intro>
            <Title>
              <Name>{item.nickname}</Name>
              <Login>@{item.login}</Login>
              <SpaceGrow />
              <DropdownButton top={2}>全部</DropdownButton>
            </Title>
            <Bio>{item.bio}</Bio>
          </Intro>
        </User>
      ))}
    </Wrapper>
  )
}

export default memo(List)
