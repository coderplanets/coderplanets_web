import { FC, memo } from 'react'

import { Wrapper } from '../styles/admin'

type TProps = {
  testid?: string
}

const Admin: FC<TProps> = ({ testid = 'admin' }) => {
  return (
    <Wrapper>
      <div>Admin</div>
    </Wrapper>
  )
}

export default memo(Admin)
