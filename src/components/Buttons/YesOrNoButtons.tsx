import React from 'react'

import { Space } from '@/components/Common'
import Button from './Button'

import { Wrapper, CancelBtn } from './styles/yes_or_no_buttons'

type TProps = {
  align?: 'center' | 'right'
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm?: () => void
}

const YesOrNoButton: React.FC<TProps> = ({
  align = 'center',
  cancelText = '取消',
  confirmText = '确定',
  onCancel = console.log,
  onConfirm = console.log,
}) => {
  return (
    <Wrapper align={align}>
      <CancelBtn onClick={() => onCancel?.()}>{cancelText}</CancelBtn>
      <Space left={5} right={10} />
      <Button size="small" type="primary" onClick={() => onConfirm?.()}>
        {confirmText}
      </Button>
    </Wrapper>
  )
}

export default YesOrNoButton
