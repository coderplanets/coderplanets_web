import styled from 'styled-components'

import css from '@/utils/css'
import { pixelAdd } from '@/utils/dom'
import { WIDTH } from '@/utils/css/metric'

import { BaseWrapper, BaseInnerWrapper, BaseContentWrapper } from './index'

export const Wrapper = styled(BaseWrapper)`
  ${css.flexColumn('align-both')};
`
export const InnerWrapper = styled(BaseInnerWrapper)`
  ${css.flexColumn()};

  max-width: ${pixelAdd(WIDTH.COMMUNITY.CONTENT, 46)};
  margin-left: ${WIDTH.COMMUNITY.CONTENT_OFFSET};

  /* 经典布局在统一宽度下再缩减 35px, 否则列表页会太宽 */
  padding-left: 35px;
  padding-right: 35px;
`
export const ContentWrapper = styled(BaseContentWrapper)``
