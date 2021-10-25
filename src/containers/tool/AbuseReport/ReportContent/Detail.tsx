import { FC } from 'react'

import Input from '@/widgets/Input'
import { Br } from '@/widgets/Common'

import type { TREPORT_ITEM } from '../spec'
import { Wrapper, DetailDesc } from '../styles/report_content/detail'

type TProps = {
  activeItem: TREPORT_ITEM
}

const Detail: FC<TProps> = ({ activeItem }) => {
  return (
    <Wrapper>
      <DetailDesc>{activeItem.detail}</DetailDesc>
      <Br bottom={25} />
      <Input
        onChange={() => console.log}
        placeholder="补充信息 (可选)"
        behavior="textarea"
        autoFocus
      />
    </Wrapper>
  )
}

export default Detail
