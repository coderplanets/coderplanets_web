import { FC, memo } from 'react'

import Checker from '@/components/Checker'
import Menu from '../Menu'

import { Wrapper } from '../styles/options'

const Header: FC = () => {
  return (
    <Wrapper>
      <Checker
        checked
        size="small"
        dimWhenIdle
        // onChange={(checked) => toggleTemplate(checked)}
      >
        使用模板
      </Checker>
      <Menu />
    </Wrapper>
  )
}

export default memo(Header)
