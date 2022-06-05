import { FC, memo, ReactNode } from 'react'

import { Divider } from '@/widgets/Common'

import { Wrapper, Title, Desc } from './styles/portal'

type TProps = {
  title: string
  desc?: ReactNode
}

const Portal: FC<TProps> = ({ title, desc = null }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {desc && <Desc>{desc}</Desc>}
      <Divider bottom={30} top={20} />
    </Wrapper>
  )
}

export default memo(Portal)
