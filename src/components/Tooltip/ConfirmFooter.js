import React from 'react'

import { Space } from '@components/Common'
import { Button } from '@components/Buttons'
import { Wrapper, ButtonsWrapper, CancleButton } from './styles/confirm_footer'

const ConfirmFooter = ({ onConfirm }) => {
  return (
    <Wrapper>
      <ButtonsWrapper>
        <Button type="red" size="small" onClick={onConfirm}>
          确认
        </Button>
        <Space right="10px" />
        <CancleButton>取消</CancleButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default React.memo(ConfirmFooter)
