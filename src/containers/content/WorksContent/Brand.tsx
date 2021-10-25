import { FC } from 'react'

import BrandTitle from '@/widgets/BrandTitle'

import { Wrapper, Divider } from './styles/brand'

type TProps = {
  testid?: string
}

const Brand: FC<TProps> = ({ testid = 'works-content-brand' }) => {
  return (
    <Wrapper testid={testid}>
      <BrandTitle
        title="作品集市"
        fontSize={18}
        mBottom={0}
        desc="面向开发者，有趣有爱的作品跳蚤集市。"
      />

      <Divider />
    </Wrapper>
  )
}

export default Brand
