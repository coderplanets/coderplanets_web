import React from 'react'
import Link from 'next/link'

import { ROUTE } from '@/constant'

import {
  Wrapper,
  InnerWrapper,
  Links,
  Site,
  MoreText,
} from '../styles/desktop_view/bottom_info'

const BottomInfo: React.FC = () => (
  <Wrapper>
    <InnerWrapper>
      <Links>
        <Site href="http://beian.miit.gov.cn">蜀ICP备17043722号-4</Site>
      </Links>
      <Link href={`/${ROUTE.SPONSOR}`} passHref>
        <MoreText href={ROUTE.SPONSOR}>Power By Groupher @ 2021</MoreText>
      </Link>
    </InnerWrapper>
  </Wrapper>
)

export default React.memo(BottomInfo)
