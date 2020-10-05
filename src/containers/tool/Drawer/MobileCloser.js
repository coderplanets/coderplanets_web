import React from 'react'

import { ICON_CMD } from '@/config'
import {
  TopWrapper,
  BottomWrapper,
  CloseBtn,
  UpIcon,
} from './styles/mobile_closer'

import { closeDrawer } from './logic'

const MobileCloser = ({ animation }) => {
  const content = (
    <CloseBtn onClick={closeDrawer}>
      <UpIcon src={`${ICON_CMD}/up_o.svg`} />
    </CloseBtn>
  )

  if (animation.from === 'bottom') {
    return <BottomWrapper>{content}</BottomWrapper>
  }
  return <TopWrapper>{content}</TopWrapper>
}

export default MobileCloser
