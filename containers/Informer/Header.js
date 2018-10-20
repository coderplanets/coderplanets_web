import React from 'react'

import { Wrapper } from './styles/header'
import { cutFrom } from '../../utils'

const Header = ({ data }) => (
  <Wrapper>
    <div>【 {cutFrom(data.title, 15)} 】</div>
  </Wrapper>
)

export default Header
