import { FC, memo } from 'react'

import type { TC11NLayout } from '@/spec'
import { ROUTE } from '@/constant'

import {
  Wrapper,
  InnerWrapper,
  BeianLink,
  CompanyLink,
} from '../styles/desktop_view/bottom_info'

type TProps = {
  metric: string
  layout?: TC11NLayout
}

const BottomInfo: FC<TProps> = ({ metric, layout }) => {
  return (
    <Wrapper metric={metric}>
      <InnerWrapper layout={layout}>
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

export default memo(BottomInfo)
