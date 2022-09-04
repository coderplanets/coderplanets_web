/*
 *
 * Radio
 *
 */

import { FC, memo } from 'react'

import type { TSizeSM, TSpace } from '@/spec'
import { buildLog } from '@/utils/logger'
import { SIZE } from '@/constant'

import { Wrapper, Label } from './styles/radio'

/* eslint-disable-next-line */
const log = buildLog('w:Radio:index')

type TItem = {
  value: string
  key: string | boolean
  dimOnActive?: boolean
}

type TProps = {
  items: TItem[]
  activeKey: string | boolean
  size?: TSizeSM
  onChange?: (item: TItem) => void
} & TSpace

const Radio: FC<TProps> = ({
  items,
  activeKey,
  size = SIZE.MEDIUM,
  onChange = log,
  ...restProps
}) => {
  return (
    <Wrapper testid="radio" {...restProps}>
      {items.map((item) => (
        <Label
          key={item.value}
          checked={item.key === activeKey}
          onClick={() => onChange?.(item)}
          dimOnActive={item.dimOnActive}
          size={size}
        >
          {item.value}
        </Label>
      ))}
    </Wrapper>
  )
}

export default memo(Radio)
