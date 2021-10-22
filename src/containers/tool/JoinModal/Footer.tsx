import { FC, memo } from 'react'

import Button from '@/widgets/Buttons/Button'
import {
  Wrapper,
  Note,
  WelcomeWrapper,
  Welcome,
  WelcomeDesc,
} from './styles/footer'

type TProps = {
  onConfirm: () => void
  mask: boolean
}

const Footer: FC<TProps> = ({ onConfirm, mask }) => {
  return (
    <Wrapper>
      <Note>
        为营造一个有意义的交流氛围，请阅读对应的「进群须知」后谨慎加入，谢谢理解。
      </Note>
      {mask ? (
        <Button onClick={onConfirm}>确定加入</Button>
      ) : (
        <WelcomeWrapper>
          <Welcome>欢迎加入</Welcome>
          <WelcomeDesc>期待你的宝贵意见</WelcomeDesc>
        </WelcomeWrapper>
      )}
    </Wrapper>
  )
}

export default memo(Footer)
