import { FC, memo } from 'react'

import Button from '@/widgets/Buttons/Button'
import { Space } from '@/widgets/Common'

import { FOOTER_BEHAVIOR } from './constant'

import { Wrapper, ButtonsWrapper, CancelButton } from './styles/confirm_footer'

type TProps = {
  behavior?: 'default' | 'confirm' | 'delete-confirm' | 'add'

  onConfirm?: () => void
  onCancel?: () => void
}

const ConfirmFooter: FC<TProps> = ({ onConfirm, onCancel, behavior }) => {
  let content = null

  switch (behavior) {
    case FOOTER_BEHAVIOR.DELETE_CONFIRM: {
      content = (
        <ButtonsWrapper>
          <CancelButton onClick={onCancel}>取消</CancelButton>
          <Space right={10} />
          <Button size="tiny" type="red" onClick={() => onConfirm?.()}>
            确定
          </Button>
        </ButtonsWrapper>
      )
      break
    }

    case FOOTER_BEHAVIOR.ADD: {
      content = (
        <ButtonsWrapper>
          <Button size="small" type="primary" onClick={() => onConfirm?.()}>
            添加
          </Button>
          <Space right={10} />
          <CancelButton onClick={() => onCancel?.()}>取消</CancelButton>
        </ButtonsWrapper>
      )
      break
    }

    default: {
      content = (
        <ButtonsWrapper>
          <Button size="small" type="primary" onClick={onConfirm}>
            确定
          </Button>
          <Space right={10} />
          <CancelButton onClick={() => onCancel?.()}>取消</CancelButton>
        </ButtonsWrapper>
      )
      break
    }
  }

  return <Wrapper>{content}</Wrapper>
}

export default memo(ConfirmFooter)
