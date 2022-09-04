import { FC } from 'react'

import { SIZE } from '@/constant'
import { buildLog } from '@/utils/logger'

import type { TProps as TButtonProps } from './index'
import {
  Wrapper,
  UpButton,
  OrSign,
  BottomButton,
} from '../styles/or_button/vertical_button'

const log = buildLog('w:VericalButton')

type TProps = Omit<TButtonProps, 'direction'>

const VerticalButton: FC<TProps> = ({
  onClick = log,
  size = SIZE.SMALL,
  activeKey,
  group = [
    {
      key: 'hello',
      title: 'hello',
    },
    {
      key: 'cps',
      title: 'cps',
    },
  ],
}) => {
  return (
    <Wrapper>
      <UpButton
        size={size}
        active={group[0].key === activeKey}
        onClick={() => onClick(group[0].key)}
      >
        {group[0].title}
      </UpButton>
      <OrSign>or</OrSign>
      <BottomButton
        size={size}
        active={group[1].key === activeKey}
        onClick={() => onClick(group[1].key)}
      >
        {group[1].title}
      </BottomButton>
    </Wrapper>
  )
}

export default VerticalButton
