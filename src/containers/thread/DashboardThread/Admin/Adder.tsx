import { FC, memo } from 'react'

import { Space } from '@/widgets/Common'
import { Wrapper, Inputer, PlusIcon, AddButton } from '../styles/admin/adder'

const Adder: FC = () => {
  return (
    <Wrapper>
      <Inputer placeholder="账户名称 / 登入ID" />
      <Space right={30} />
      <AddButton size="small">
        <PlusIcon />
        新增
      </AddButton>
    </Wrapper>
  )
}

export default memo(Adder)
