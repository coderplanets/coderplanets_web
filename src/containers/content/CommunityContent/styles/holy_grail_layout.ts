import styled from 'styled-components'

import css from '@/utils/css'
import { WIDTH } from '@/utils/css/metric'

import { BaseWrapper, BaseInnerWrapper, BaseContentWrapper } from './index'

export const Wrapper = styled(BaseWrapper)`
  ${css.flex('justify-center', 'align-start')};
`
export const InnerWrapper = styled(BaseInnerWrapper)`
  ${css.flex()};

  max-width: ${WIDTH.COMMUNITY.CONTENT};
  /* TODO: 10px when HolyGrailLayout, make it center in "human feel" */
  margin-left: 10px;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
`
export const ContentWrapper = styled(BaseContentWrapper)``
export const TabsWrapper = styled.div`
  width: calc(100% - 42px);
  background: #103645;
  padding-left: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-top: 10px;
`
