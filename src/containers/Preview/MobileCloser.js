import React from 'react'

import { ICON_CMD } from '@/config'
import { Wrapper, CloseBtn, UpIcon } from './styles/mobile_closer'

import { closePreview } from './logic'

const MobileCloser = () => {
  return (
    <Wrapper>
      <CloseBtn onClick={closePreview}>
        <UpIcon src={`${ICON_CMD}/up_o.svg`} />
      </CloseBtn>
    </Wrapper>
  )
}

export default MobileCloser
