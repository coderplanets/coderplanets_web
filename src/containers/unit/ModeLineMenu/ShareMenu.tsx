import { FC, memo } from 'react'

import Share from '@/containers/tool/Share'

import { Wrapper } from './styles/share_menu'

const ShareMenu: FC = () => {
  return (
    <Wrapper>
      <Share />
    </Wrapper>
  )
}

export default memo(ShareMenu)
