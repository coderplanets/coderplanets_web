/*
 *
 * Checker
 *
 */

import { FC, ReactNode, memo } from 'react'

import type { TSIZE_SM } from '@/spec'
import { ICON } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils/logger'

import { Wrapper, IconWrapper, Icon, ChildWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Checker:index')

type TProps = {
  children?: ReactNode | null
  checked?: boolean
  hiddenMode?: boolean
  size?: TSIZE_SM
  dimWhenIdle?: boolean
  onChange?: (checked: boolean) => void
}

const Checker: FC<TProps> = ({
  checked = false,
  onChange = log,
  hiddenMode = false,
  size = SIZE.MEDIUM,
  children = null,
  dimWhenIdle = false,
}) => {
  const show = checked || !hiddenMode

  return (
    <Wrapper
      show={show}
      dimWhenIdle={dimWhenIdle}
      onClick={() => show && onChange(!checked)}
    >
      <IconWrapper checked={checked} size={size}>
        <Icon src={`${ICON}/shape/checked.svg`} checked={checked} size={size} />
      </IconWrapper>
      <ChildWrapper checked={checked} size={size}>
        {children}
      </ChildWrapper>
    </Wrapper>
  )
}

export default memo(Checker)
