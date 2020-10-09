import React from 'react'

import { ICON_CMD } from '@/config'
import {
  TopWrapper,
  BottomWrapper,
  CloseBtn,
  UpIcon,
} from './styles/mobile_closer'

import { closeDrawer } from './logic'

const MobileCloser = ({ options }) => {
  const content = (
    <CloseBtn onClick={closeDrawer}>
      <UpIcon src={`${ICON_CMD}/up_o.svg`} />
    </CloseBtn>
  )

  if (options.direction === 'bottom') {
    return <BottomWrapper>{content}</BottomWrapper>
  }
  return <TopWrapper>{content}</TopWrapper>
}

export default MobileCloser
