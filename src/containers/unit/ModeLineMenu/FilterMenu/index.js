import React from 'react'

// import { ICON } from '@/config'
// import DivideText from '@/widgets/DivideText'

import Header from './Header'
import Content from './Content'

import { Wrapper } from '../styles/filter_menu'

const FilterMenu = ({ curActive }) => {
  return (
    <Wrapper>
      <Header />
      <Content curActive={curActive} />
    </Wrapper>
  )
}

export default React.memo(FilterMenu)
