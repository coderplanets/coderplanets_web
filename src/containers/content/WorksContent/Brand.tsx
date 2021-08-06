import { FC } from 'react'

import { SpaceGrow } from '@/components/Common'
import { Wrapper, Title, BrandText, Desc, Divider } from './styles/brand'

type TProps = {
  testid?: string
}

const Brand: FC<TProps> = ({ testid = 'works-content-brand' }) => {
  return (
    <Wrapper testid={testid}>
      <Title>
        <BrandText>作品集市</BrandText>
        <SpaceGrow />
      </Title>
      <Desc>
        有趣有爱的作品跳蚤市场。
        <div>by makers, for makers.</div>
      </Desc>
      <Divider />
    </Wrapper>
  )
}

export default Brand
