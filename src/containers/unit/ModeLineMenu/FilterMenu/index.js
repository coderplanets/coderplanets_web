import React from 'react'

// import { ICON } from '@/config'
// import DivideText from '@/components/DivideText'

import Header from './Header'
import Content from './Content'

import { Wrapper } from '../styles/filter_menu'

const FilterMenu = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  )
}

export default React.memo(FilterMenu)
