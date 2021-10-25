import { FC, memo } from 'react'

import { Wrapper, ApplyText } from '../styles/tag_setter/footer'

import Button from '@/widgets/Buttons/Button'

// import type { TTagView } from '../spec'

type TProps = {
  // view: TTagView
  // goBack: () => void
  // goSearch: () => void
}

const Footer: FC = () => {
  return (
    <Wrapper>
      <ApplyText>申请创建</ApplyText>
      <Button size="small">确定</Button>
    </Wrapper>
  )
}

export default memo(Footer)
