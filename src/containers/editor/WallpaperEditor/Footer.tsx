import { FC, memo } from 'react'

import Button from '@/widgets/Buttons/Button'
import { Wrapper, ConfirmBtn } from './styles/footer'

const Footer: FC = () => {
  return (
    <Wrapper>
      <Button size="small" ghost noBorder>
        不设背景
      </Button>
      <ConfirmBtn size="small" space={13}>
        确定
      </ConfirmBtn>
    </Wrapper>
  )
}

export default memo(Footer)
