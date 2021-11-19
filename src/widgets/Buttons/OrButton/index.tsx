import { FC } from 'react'

import type { TSIZE_SM } from '@/spec'

import HorizontalButton from './HorizontalButton'
import VerticalButton from './VerticalButton'

export type TProps = {
  direction?: 'row' | 'column'
  size?: TSIZE_SM
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
