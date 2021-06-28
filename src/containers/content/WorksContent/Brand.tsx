import { FC } from 'react'

import { Wrapper, Title, Desc, Divider } from './styles/brand'

type TProps = {
  testid?: string
}

const Brand: FC<TProps> = ({ testid = 'works-content-brand' }) => {
  return (
    <Wrapper testid={testid}>
      <Title>作品集市</Title>
      <Desc>by makers, for makers.</Desc>
      <Divider />
    </Wrapper>
  )
}

export default Brand
