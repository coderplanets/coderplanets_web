import React from 'react'
import Link from 'next/link'

import { ROUTE } from '@/constant'

import {
  Wrapper,
  InnerWrapper,
  BeianLink,
  CompanyLink,
} from '../styles/desktop_view/bottom_info'

type TProps = {
  metric: string
}

const BottomInfo: React.FC<TProps> = ({ metric }) => {
  return (
    <Wrapper metric={metric}>
      <InnerWrapper>
        <CompanyLink href={ROUTE.SPONSOR}>
          Groupher @ 2021. 保留所有权利。
        </CompanyLink>
        <BeianLink href="http://beian.miit.gov.cn">
          蜀ICP备17043722号-4
        </BeianLink>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(BottomInfo)
