import { FC, memo } from 'react'

import ArrowButton from '@/widgets/Buttons/ArrowButton'

import type { TType } from '../spec'
import { TYPE } from '../constant'
import { Wrapper } from '../styles/tag_setter/footer'
import { changeSetter } from '../logic'

type TProps = {
  type: TType
}

const Footer: FC<TProps> = ({ type }) => {
  if (type === TYPE.SELECT_COMMUNITY) return null

  return (
    <Wrapper>
      <ArrowButton onClick={() => changeSetter(TYPE.TAG)}>下一步</ArrowButton>
    </Wrapper>
  )
}

export default memo(Footer)
