import React from 'react'

import { VIEW } from '@/constant'
import UserBrief from '@/components/UserBrief'
import { Wrapper } from '../styles/sidebar'

const Sidebar = ({ viewingUser }) => {
  return (
    <Wrapper>
      <UserBrief user={viewingUser} view={VIEW.DESKTOP} />
    </Wrapper>
  )
}

export default React.memo(Sidebar)
