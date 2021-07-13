import { FC, memo } from 'react'

import type { TTag } from '@/spec'
import { cutRest } from '@/utils'
import InlineTags from '@/components/InlineTags'

import { Wrapper, Title } from './styles/header'

type TProps = {
  title: string
  tags: TTag[]
}

const Header: FC<TProps> = ({ title, tags }) => {
  return (
    <Wrapper>
      <Title>{cutRest(title, 100)}</Title>
      <InlineTags data={tags} />
    </Wrapper>
  )
}

export default memo(Header)
