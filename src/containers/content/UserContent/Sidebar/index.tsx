import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { VIEW } from '@/constant'
import UserBrief from '@/widgets/UserBrief'
import { Wrapper } from '../styles/sidebar'

type TProps = {
  viewingUser: TUser
  isSelfViewing?: boolean
}

const Sidebar: FC<TProps> = ({ viewingUser, isSelfViewing = false }) => {
  return (
    <Wrapper>
      <UserBrief user={viewingUser} view={VIEW.DESKTOP} />
    </Wrapper>
  )
}

export default memo(Sidebar)
