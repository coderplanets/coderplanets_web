import React from 'react'

import PagiFooter from '@components/PagiFooter'
// import { ProductList } from '@components/IntroList'
import { FamePeopleList } from '@components/IntroList'

import Footer from '../Footer'

import { Wrapper } from '../styles/normal_list'

const NormalList = () => {
  return (
    <Wrapper>
      <FamePeopleList />
      <PagiFooter margin={{ top: '40px', bottom: '60px' }} />
      <Footer />
      <br />
    </Wrapper>
  )
}

export default NormalList
