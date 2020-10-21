import React from 'react'

import { Button } from '@/components/Buttons'
import { Space } from '@/components/Common'

import {
  Wrapper,
  Title,
  ButtonsWrapper,
  ConfirmBtn,
  ResetBtn,
} from '../styles/filter_menu/header'

const Header = () => {
  return (
    <Wrapper>
      <Title>筛选内容</Title>
      <ButtonsWrapper>
        <ConfirmBtn>
          <Button size="tiny" type="primary">
            确&nbsp;定
          </Button>
        </ConfirmBtn>
        <Space right="12px" />
        <ResetBtn>重置</ResetBtn>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default Header
