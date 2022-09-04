/*
 *
 * ArrowButtons
 *
 */

import { FC, ReactNode, memo } from 'react'

import type { TSize } from '@/spec'
import { ICON } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils/logger'

import { Wrapper, Text, LeftIcon, RightIcon } from './styles/arrow_button'

/* eslint-disable-next-line */
const log = buildLog('w:Buttons:ArrowButton')

type TProps = {
  children?: ReactNode
  onClick?: () => void
  size?: TSize
  direction?: 'left' | 'right'
  dimWhenIdle?: boolean
  disabled?: boolean
  arrowStyle?: 'default' | 'simple'
}

const ArrowButton: FC<TProps> = ({
  children = '下一步',
  onClick = log,
  size = SIZE.SMALL,
  direction = 'right',
  dimWhenIdle = false,
  arrowStyle = 'default',
  disabled = false,
}) => {
  const iconSrc =
    arrowStyle === 'default'
      ? `${ICON}/shape/arrow.svg`
      : `${ICON}/shape/arrow-simple.svg`

  return (
    <Wrapper
      onClick={() => !disabled && onClick()}
      dimWhenIdle={dimWhenIdle}
      direction={direction}
      size={size}
      disabled={disabled}
    >
      {direction === 'left' ? (
        <>
          <LeftIcon arrowStyle={arrowStyle} size={size} src={iconSrc} />
          <Text size={size}>{children}</Text>
        </>
      ) : (
        <>
          <Text size={size}>{children}</Text>
          <RightIcon arrowStyle={arrowStyle} size={size} src={iconSrc} />
        </>
      )}
    </Wrapper>
  )
}

export default memo(ArrowButton)
