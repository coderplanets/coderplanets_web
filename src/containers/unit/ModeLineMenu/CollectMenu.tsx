import { FC, memo } from 'react'

import CollectionFolder from '@/containers/tool/CollectionFolder'

import { Wrapper } from './styles/share_menu'

const CollectionMenu: FC = () => {
  return (
    <Wrapper>
      <CollectionFolder />
    </Wrapper>
  )
}

export default memo(CollectionMenu)
