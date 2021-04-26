/*
 *
 * Checker
 *
 */

import React from 'react'

import type { TSIZE_SM } from '@/spec'
import { ICON } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils'

import { Wrapper, IconWrapper, Icon, ChildWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Checker:index')

type TProps = {
  children?: React.ReactNode | null
  checked?: boolean
  hiddenMode?: boolean
  size?: TSIZE_SM
  onChange?: (checked: boolean) => void
}

const Checker: React.FC<TProps> = ({
  checked = false,
  onChange = log,
  hiddenMode = false,
  size = SIZE.MEDIUM,
  children = null,
}) => {
  const show = checked || !hiddenMode

  return (
    <Wrapper show={show} onClick={() => show && onChange(!checked)}>
      <IconWrapper checked={checked} size={size}>
        <Icon src={`${ICON}/shape/checked.svg`} checked={checked} size={size} />
      </IconWrapper>
      <ChildWrapper checked={checked} size={size}>
        {children}
      </ChildWrapper>
    </Wrapper>
  )
}

export default React.memo(Checker)
