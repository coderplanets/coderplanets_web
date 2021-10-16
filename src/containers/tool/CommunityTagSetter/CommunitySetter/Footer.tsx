import { FC, memo } from 'react'

import ArrowButton from '@/components/Buttons/ArrowButton'

import { TYPE } from '../constant'
import { Wrapper } from '../styles/tag_setter/footer'
import { changeSetter } from '../logic'

const Footer: FC = () => {
  return (
    <Wrapper>
      <ArrowButton onClick={() => changeSetter(TYPE.TAG)}>下一步</ArrowButton>
    </Wrapper>
  )
}

export default memo(Footer)
