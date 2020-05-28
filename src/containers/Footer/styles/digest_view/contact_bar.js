import styled from 'styled-components'

import { Button } from '@/components/Buttons'
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
export const SubscribeBtn = styled(Button)`
  margin-left: 15px;
  margin-right: 18px;
  filter: saturate(0.7);

  padding: 4px 10px;
  padding-top: 3px;
  height: 28px;

  ${SubscribeWrapper}:hover & {
    filter: saturate(1);
    padding: 4px 15px;
    height: 32px;
  }
  transition: all 0.25s;
`
export const SubscribeText = styled.div`
  font-size: 12px;
  color: ${theme('footer.hover')};
  width: 200px;
  line-height: 1.7;
  opacity: 0;

  ${SubscribeWrapper}:hover & {
    opacity: 1;
  }

  transition: all 0.25s;
`
