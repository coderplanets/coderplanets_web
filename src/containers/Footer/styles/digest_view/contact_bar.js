import styled from 'styled-components'

import Input from '@/components/Input'

import { theme, cs } from '@/utils'

export const Wrapper = styled.footer`
  ${cs.flexColumn('align-center')};
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 6vw;
  height: 68px;
`
export const SubscribeWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const SubscribeInput = styled(Input)``
export const SubscribeBtn = styled.div`
  margin-left: 15px;
  margin-right: 18px;
`
export const SubscribeText = styled.div`
  font-size: 11px;
  color: ${theme('footer.text')};
  width: 140px;
  line-height: 1.9;
  opacity: 0;

  ${SubscribeWrapper}:hover & {
    opacity: 1;
  }

  transition: all 0.25s;
`
