import React from 'react'

import { SIZE } from '@/constant'
import { TButtonSize } from '@/spec'

import {
  Wrapper,
  LeftButton,
  OrSign,
  RightButton,
} from '../styles/or_button/horizontal_button'

type TProps = {
  activeKey: string
  size?: TButtonSize
  onClick: (key: string) => void
  group: {
    key: string
    title: string
  }[]
}

const HorizontalButton: React.FC<TProps> = ({
  onClick,
  size = SIZE.SMALL as TButtonSize,
  activeKey,
  group,
}) => {
  return (
    <Wrapper size={size}>
      <LeftButton
        size={size}
        active={group[0].key === activeKey}
        onClick={() => onClick(group[0].key)}
      >
        {group[0].title}
      </LeftButton>
      <OrSign>or</OrSign>
      <RightButton
        size={size}
        active={group[1].key === activeKey}
        onClick={() => onClick(group[1].key)}
      >
        {group[1].title}
      </RightButton>
    </Wrapper>
  )
}

export default HorizontalButton
