import { FC, memo } from 'react'

import { Wrapper, ApplyText } from '../styles/tag_setter/footer'

import Button from '@/components/Buttons/Button'

// import type { TView } from '../spec'

type TProps = {
  // view: TView
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
