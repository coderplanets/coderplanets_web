import { FC, memo, ReactNode } from 'react'

import { SpaceGrow } from '@/widgets/Common'

import Menu from './Menu'

import { Wrapper } from './styles/options'

type TProps = {
  addon: ReactNode
}

const Options: FC<TProps> = ({ addon }) => {
  return (
    <Wrapper>
      {addon}
      <SpaceGrow />
      <Menu />
    </Wrapper>
  )
}

export default memo(Options)
