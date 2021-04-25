import React from 'react'

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
    </Wrapper>
  )
}

export default Info
