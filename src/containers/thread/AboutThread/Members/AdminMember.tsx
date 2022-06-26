import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import AdminAvatar from '@/widgets/AdminAvatar'

import { Wrapper, Info, Name, Bio } from '../styles/members/admin_member'

type TProps = {
  user: TUser
}

const AdminMember: FC<TProps> = ({ user }) => {
  return (
    <Wrapper>
      <AdminAvatar user={user} right={10} />
      <Info>
        <Name>{user.nickname}</Name>
        <Bio>{user.bio}</Bio>
      </Info>
    </Wrapper>
  )
}

export default memo(AdminMember)
