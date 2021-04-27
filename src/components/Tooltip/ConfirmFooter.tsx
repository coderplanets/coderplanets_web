import React, { FC } from 'react'

import Button from '@/components/Buttons/Button'
import { Space } from '@/components/Common'

import { FOOTER_BEHAVIOR } from './constant'

import { Wrapper, ButtonsWrapper, CancelButton } from './styles/confirm_footer'

type TProps = {
  footerBehavior?: 'default' | 'confirm' | 'delete-confirm' | 'add'

  onConfirm?: () => void
  onCancel?: () => void
}

const ConfirmFooter: FC<TProps> = ({ onConfirm, onCancel, footerBehavior }) => {
  let content = null

  switch (footerBehavior) {
    case FOOTER_BEHAVIOR.DELETE_CONFIRM: {
      content = (
        <ButtonsWrapper>
          <Button size="small" type="red" onClick={() => onConfirm?.()}>
            确认删除
          </Button>
          <Space right={10} />
          <CancelButton onClick={onCancel}>取消</CancelButton>
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

export default React.memo(ConfirmFooter)
