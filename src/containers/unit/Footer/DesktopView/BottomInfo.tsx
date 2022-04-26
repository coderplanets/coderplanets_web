import { FC, memo } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import {
  RawWrapper,
  InnerWrapper,
  ClassicWrapper,
  BeianLink,
  PowerByWrapper,
  PowerByLink,
} from '../styles/desktop_view/bottom_info'

type TProps = {
  metric: TMetric
}

const BottomInfo: FC<TProps> = ({ metric }) => {
  if (metric !== METRIC.COMMUNITY) {
    return (
      <RawWrapper metric={metric}>
        <InnerWrapper>
          <BeianLink href="http://beian.miit.gov.cn">
            蜀ICP备17043722号-4
          </BeianLink>
          <PowerByWrapper>
            Powered by
            <PowerByLink href="http://github.com/groupher">
              Groupher
            </PowerByLink>
          </PowerByWrapper>
        </InnerWrapper>
      </RawWrapper>
    )
  }

  const Wrapper = ClassicWrapper

  return (
    <Wrapper metric={metric}>
      <InnerWrapper>
        <BeianLink href="http://beian.miit.gov.cn">
          蜀ICP备17043722号-4
        </BeianLink>
        <PowerByWrapper>
          Powered by
          <PowerByLink href="http://github.com/groupher">Groupher</PowerByLink>
        </PowerByWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(BottomInfo)
