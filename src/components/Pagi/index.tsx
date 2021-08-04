/*
 * Pagi
 */

import { FC, ReactNode } from 'react'
import dynamic from 'next/dynamic'

import type { TSpace } from '@/spec'

export type TProps = {
  children?: ReactNode
  type?: 'bottom' | 'center'
  pageNumber?: number
  pageSize?: number
  totalCount?: number
  margin?: TSpace
  emptyMsg?: string
  noMoreMsg?: string
  showBottomMsg?: boolean
  onChange?: (page: number) => void
}

const Pagi = dynamic(() => import('./RealPagi'), {
  ssr: false,
})

export default Pagi as FC<TProps>
