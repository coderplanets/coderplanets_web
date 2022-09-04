/*
 *
 * ArrowButtons
 *
 */

import { FC, memo, ReactNode } from 'react'

import type { TSpace } from '@/spec'
import { buildLog } from '@/utils/logger'

import { Wrapper, PlusIcon, Text } from './styles/add_button'

/* eslint-disable-next-line */
const log = buildLog('w:Buttons:AddButton')

type TProps = {
  children?: ReactNode
  onClick?: () => void
  dimWhenIdle?: boolean
  disabled?: boolean
  withIcon?: boolean
} & TSpace

const AddButton: FC<TProps> = ({
  children = '添加',
  onClick = log,
  dimWhenIdle = false,
  disabled = false,
  withIcon = true,
  ...restProps
}) => {
  return (
    <Wrapper
      onClick={() => !disabled && onClick()}
      dimWhenIdle={dimWhenIdle}
      disabled={disabled}
      {...restProps}
    >
      {withIcon && <PlusIcon />}
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default memo(AddButton)
