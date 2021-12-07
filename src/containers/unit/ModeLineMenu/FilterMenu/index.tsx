import { FC, memo } from 'react'

// import { ICON } from '@/config'
// import DivideText from '@/widgets/DivideText'

import Header from './Header'
import Content from './Content'

import { Wrapper } from '../styles/filter_menu'
import type { TCurActive } from '../spec'

type TProps = {
  curActive: TCurActive
}

const FilterMenu: FC<TProps> = ({ curActive }) => {
  return (
    <Wrapper>
      <Header />
      <Content curActive={curActive} />
    </Wrapper>
  )
}

export default memo(FilterMenu)
