import React from 'react'

import { Br } from '@/components/Common'
import { ArrowButton } from '@/components/Buttons'

import type { TREPORT_ITEM } from '../spec'
import { goBack } from '../logic'

type TProps = {
  explainItem: TREPORT_ITEM
}

const Detail: React.FC<TProps> = ({ explainItem }) => {
  return (
    <div>
      <ArrowButton
        size="small"
        direction="left"
        arrowStyle="simple"
        onClick={() => goBack()}
      >
        {explainItem.title}
      </ArrowButton>
      <Br bottom={20} />
      <div>{explainItem.detail}</div>
    </div>
  )
}

export default Detail
