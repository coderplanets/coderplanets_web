import { FC } from 'react'

import BrandTitle from '@/components/BrandTitle'

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
        desc="有趣有爱的作品跳蚤集市。by makers, for makers"
      />

      <Divider />
    </Wrapper>
  )
}

export default Brand
