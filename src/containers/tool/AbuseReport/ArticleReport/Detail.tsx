import React from 'react'

import Input from '@/components/Input'
import FormItem from '@/components/FormItem'
import { Br } from '@/components/Common'
import { ArrowButton } from '@/components/Buttons'

import type { TREPORT_ITEM } from '../spec'
import { Wrapper } from '../styles/article_report/info'
import { goBack } from '../logic'

type TProps = {
  activeItem: TREPORT_ITEM
}

const Info: React.FC<TProps> = ({ activeItem }) => {
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
      <Br bottom={20} />
      <div>{activeItem.detail}</div>
      <Br bottom={15} />
      <Input
        onChange={() => console.log}
        placeholder="补充信息 (可选)"
        behavior="textarea"
        autoFocus
      />
    </Wrapper>
  )
}

export default Info
