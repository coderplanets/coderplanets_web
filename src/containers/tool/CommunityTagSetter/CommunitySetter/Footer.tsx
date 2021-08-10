import { FC, memo } from 'react'

import { Wrapper } from '../styles/tag_setter/footer'

import ArrowButton from '@/components/Buttons/ArrowButton'

// import type { TTagView } from '../spec'

const Footer: FC = () => {
  return (
    <Wrapper>
      <ArrowButton>下一步</ArrowButton>
    </Wrapper>
  )
}

export default memo(Footer)
