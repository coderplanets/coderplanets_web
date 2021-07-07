import { FC, memo } from 'react'

import type { TC11NLayout } from '@/spec'
import { C11N } from '@/constant'

import {
  InnerWrapper,
  ClassicWrapper,
  HolyGrailWrapper,
  BeianLink,
} from '../styles/desktop_view/bottom_info'

type TProps = {
  metric: string
  layout?: TC11NLayout
}

const BottomInfo: FC<TProps> = ({ metric, layout }) => {
  const Wrapper = layout === C11N.CLASSIC ? ClassicWrapper : HolyGrailWrapper

  return (
    <Wrapper metric={metric}>
      <InnerWrapper>
        <BeianLink href="http://beian.miit.gov.cn">
          蜀ICP备17043722号-4
        </BeianLink>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(BottomInfo)
