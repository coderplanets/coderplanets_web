/*
 *
 * IconText
 *
 */

import React from 'react'

import type { TSIZE } from '@/spec'
import { buildLog, nilOrEmpty } from '@/utils'
import { SIZE } from '@/constant'

import { Wrapper, Icon, Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:IconText:index')

type TProps = {
  iconSrc: string
  round?: boolean
  children: React.ReactNode
  size?: TSIZE
  margin?: string
}

const IconText: React.FC<TProps> = ({
  iconSrc,
  round = false,
  children,
  size = SIZE.SMALL,
  margin,
}) => (
  <Wrapper testid="iconText">
    {!nilOrEmpty(iconSrc) && (
      <Icon src={iconSrc} size={size} round={round} margin={margin} />
    )}
    <Text size={size}>{children}</Text>
  </Wrapper>
)

export default React.memo(IconText)
