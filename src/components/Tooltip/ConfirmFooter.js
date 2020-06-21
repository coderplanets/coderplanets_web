import React from 'react'

import { Space } from '@/components/Common'
import ConfirmBtn from './ConfirmBtn'
// import { Button } from '@/components/Buttons'
import { Wrapper, ButtonsWrapper, CancelButton } from './styles/confirm_footer'

const ConfirmFooter = ({ onConfirm }) => {
  return (
    <Wrapper>
      <ButtonsWrapper>
        <ConfirmBtn size="small" onClick={onConfirm}>
          确认
        </ConfirmBtn>
        <Space right="10px" />
        <CancelButton>取消</CancelButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default React.memo(ConfirmFooter)
