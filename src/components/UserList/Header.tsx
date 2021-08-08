import { FC, memo } from 'react'

import { ICON } from '@/config'

import { Wrapper, PlusIcon } from './styles/header'
import Button from '@/components/Buttons/Button'

const Header = () => {
  return (
    <Wrapper>
      <div>管理团队成员</div>
      <Button size="small" ghost noBorder>
        <PlusIcon src={`${ICON}/shape/plus.svg`} />
        添加新成员
      </Button>
    </Wrapper>
  )
}

export default memo(Header)
