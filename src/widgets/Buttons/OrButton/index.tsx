import { FC } from 'react'

import type { TSizeSM } from '@/spec'

import HorizontalButton from './HorizontalButton'
import VerticalButton from './VerticalButton'

export type TProps = {
  direction?: 'row' | 'column'
  size?: TSizeSM
  activeKey: string
  onClick?: (key: string) => void
  group: {
    key: string
    title: string
  }[]
}

const OrButton: FC<TProps> = ({ direction = 'row', ...restProps }) => {
  return direction === 'row' ? (
    <HorizontalButton {...restProps} />
  ) : (
    <VerticalButton {...restProps} />
  )
}

export default OrButton
