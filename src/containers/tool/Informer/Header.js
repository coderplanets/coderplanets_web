import React from 'react'

import { cutRest } from '@/utils'
import { Wrapper } from './styles/header'

const Header = ({ data }) => (
  <Wrapper>
    <div>【 {cutRest(data.title, 15)} 】</div>
  </Wrapper>
)

export default React.memo(Header)
