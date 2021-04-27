/*
 *
 * ImgFallback
 *
 */

import React, { FC } from 'react'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils'

import Work from './Work'
import Avatar from './Avatar'

/* eslint-disable-next-line */
const log = buildLog('c:ImgFallback:index')

export type TAvatarProps = {
  testid?: string
  className?: string
  user?: TUser
  size?: number
  left?: number
  right?: number
  top?: number
  bottom?: number
  quote?: boolean
}

type TProps = {
  type?: 'avatar' | 'work'
} & TAvatarProps

const ImgFallback: FC<TProps> = ({ type = 'avatar', ...restProps }) => {
  switch (type) {
    case 'work': {
      return <Work />
    }

    default:
      return <Avatar {...restProps} />
  }
}

export default React.memo(ImgFallback)
