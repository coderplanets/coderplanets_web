import { FC, memo } from 'react'

import { Wrapper } from '../styles/tag_setter/footer'

import Button from '@/components/Buttons/Button'

// import type { TTagView } from '../spec'

const Footer: FC = () => {
  return (
    <Wrapper>
      <Button size="small">确定</Button>
    </Wrapper>
  )
}

export default memo(Footer)
