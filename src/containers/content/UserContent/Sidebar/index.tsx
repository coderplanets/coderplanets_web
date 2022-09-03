import { FC, memo } from 'react'

import type { TUser, TPagedWorks, TPagedCommunities } from '@/spec'
import UserBrief from '@/widgets/UserBrief'
import { Wrapper } from '../styles/sidebar'

type TProps = {
  user: TUser
  works: TPagedWorks
  editableCommunities: TPagedCommunities
}

const Sidebar: FC<TProps> = ({ user, works, editableCommunities }) => {
  return (
    <Wrapper>
      <UserBrief
        user={user}
        works={works}
        editableCommunities={editableCommunities}
      />
    </Wrapper>
  )
}

export default memo(Sidebar)
