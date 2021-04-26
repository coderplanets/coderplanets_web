import React from 'react'

import Input from '@/components/Input'
import { Br } from '@/components/Common'
import { ArrowButton } from '@/components/Buttons'

import type { TREPORT_ITEM } from '../spec'
import { Wrapper, DetailDesc } from '../styles/report_content/detail'
import { goBack } from '../logic'

type TProps = {
  activeItem: TREPORT_ITEM
}

const Detail: React.FC<TProps> = ({ activeItem }) => {
  return (
    <Wrapper>
      <ArrowButton
        size="small"
        direction="left"
        arrowStyle="simple"
        onClick={() => goBack()}
      >
        {activeItem.title}
      </ArrowButton>
      <Br bottom={10} />
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
