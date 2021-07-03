import { FC, memo } from 'react'

import type { TC11NLayout } from '@/spec'

import {
  Wrapper,
  InnerWrapper,
  BeianLink,
} from '../styles/desktop_view/bottom_info'

type TProps = {
  metric: string
  layout?: TC11NLayout
}

const BottomInfo: FC<TProps> = ({ metric, layout }) => {
  return (
    <Wrapper metric={metric}>
      <InnerWrapper layout={layout}>
        <BeianLink href="http://beian.miit.gov.cn">
          蜀ICP备17043722号-4
        </BeianLink>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(BottomInfo)
