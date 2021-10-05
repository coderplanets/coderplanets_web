import { FC, memo, useState } from 'react'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'
import Menu from '../Menu'

import { Wrapper, LinkWrapper, LinkInput } from '../styles/options'

const Header: FC = () => {
  const [reprint, setReprint] = useState(false)

  return (
    <Wrapper>
      <Checker checked={reprint} size="small" dimWhenIdle onChange={setReprint}>
        转载 / 翻译
      </Checker>

      {reprint && (
        <LinkWrapper>
          <LinkInput placeholder="原文地址" />
        </LinkWrapper>
      )}

      <SpaceGrow />
      <Menu />
    </Wrapper>
  )
}

export default memo(Header)
