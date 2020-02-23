import React from 'react'

import PagiFooter from '@components/PagiFooter'
import ProductIntroList from '@components/ProductIntroList'

import Footer from '../Footer'

import { Wrapper } from '../styles/normal_list'

const NormalList = () => {
  return (
    <Wrapper>
      <ProductIntroList />
      <PagiFooter margin={{ top: '40px', bottom: '60px' }} />
      <Footer />
      <br />
    </Wrapper>
  )
}

export default NormalList
