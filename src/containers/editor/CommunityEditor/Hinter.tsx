import { FC, memo } from 'react'

import { Wrapper, Title, Desc } from './styles/hinter'

type TProps = {
  title: string
  desc: string
}

const Hinter: FC<TProps> = ({ title, desc }) => (
  <Wrapper>
    <Title>【{title}】</Title>
    <Desc>{desc}</Desc>
  </Wrapper>
)

export default memo(Hinter)
