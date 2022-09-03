import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { Space } from '@/widgets/Common'

import Button from './Button'

import { Wrapper, CancelBtn } from './styles/yes_or_no_buttons'

const log = buildLog('C:YesOrNoButton')

type TProps = {
  align?: 'center' | 'right'
  cancelText?: string
  confirmText?: string
  loading?: boolean
  disabled?: boolean
  onCancel?: () => void
  onConfirm?: () => void
  space?: number
}

const YesOrNoButton: FC<TProps> = ({
  align = 'center',
  cancelText = '取消',
  confirmText = '确定',
  onCancel = log,
  onConfirm = log,
  disabled = false,
  loading = false,
  space = 1,
}) => {
  return (
    <Wrapper align={align}>
      {!loading && (
        <CancelBtn onClick={() => onCancel?.()}>{cancelText}</CancelBtn>
      )}
      <Space left={5} right={10} />

      <Button
        size="small"
        type="primary"
        loading={loading}
        disabled={disabled}
        onClick={() => onConfirm?.()}
      >
        <Space left={space} />
        {confirmText}
        <Space right={space - 1} />
      </Button>
    </Wrapper>
  )
}

export default YesOrNoButton
