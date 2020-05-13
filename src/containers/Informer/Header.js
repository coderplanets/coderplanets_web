import React from 'react'

import { cutFrom } from '@/utils'
import { Wrapper } from './styles/header'

const Header = ({ data }) => (
  <Wrapper>
    <div>【 {cutFrom(data.title, 15)} 】</div>
  </Wrapper>
)

export default React.memo(Header)
