import { memo, FC } from 'react'

import Button from '@/widgets/Buttons/Button'
import { Space } from '@/widgets/Common'

import {
  Wrapper,
  Title,
  ButtonsWrapper,
  ConfirmBtn,
  ResetBtn,
} from '../styles/filter_menu/header'

const Header: FC = () => {
  return (
    <Wrapper>
      <Title>筛选内容</Title>
      <ButtonsWrapper>
        <ConfirmBtn>
          <Button size="tiny" type="primary">
            确&nbsp;定
          </Button>
        </ConfirmBtn>
        <Space right={12} />
        <ResetBtn>重置</ResetBtn>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default memo(Header)
