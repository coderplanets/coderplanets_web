import React from 'react'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from '../../styles/mobile_view/index'

const MobileView = ({ entry, cover, onPreview, onAuthorSelect }) => {
  return (
    <Wrapper>
      <Header item={entry} cover={cover} onAuthorSelect={onAuthorSelect} />
      <Body item={entry} onPreview={onPreview} />
      <Footer item={entry} />
    </Wrapper>
  )
}

export default React.memo(MobileView)
