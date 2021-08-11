import { FC, memo } from 'react'

import ArrowButton from '@/components/Buttons/ArrowButton'

import { SETTER } from '../constant'
import { Wrapper } from '../styles/tag_setter/footer'
import { changeSetter } from '../logic'

const Footer: FC = () => {
  return (
    <Wrapper>
      <ArrowButton onClick={() => changeSetter(SETTER.TAG)}>下一步</ArrowButton>
    </Wrapper>
  )
}

export default memo(Footer)
