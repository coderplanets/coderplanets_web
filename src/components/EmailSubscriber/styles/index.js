import styled from 'styled-components'

import { Button } from '@/components/Buttons'
import Input from '@/components/Input'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flex('align-center')};
`
export const SubscribeInput = styled(Input)`
  background: #0e3f4e;

  &:hover {
    background: #104556;
  }
`
export const SubscribeBtnWrapper = styled.div`
  width: 88px;
`
export const SubscribeBtn = styled(Button)`
  margin-left: 15px;
  margin-right: 18px;
  filter: saturate(0.8);

  padding: 4px 10px;
  padding-top: 3px;
  height: 28px;

  ${Wrapper}:hover & {
    filter: saturate(1);
    /* padding: 4px 15px;
    height: 32px; */
  }
  transition: all 0.25s;
`
export const SubscribeText = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  width: 200px;
  line-height: 1.7;
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.25s;
  transition-delay: 0.5s;
`
export const SubscribeCancel = styled.span`
  color: ${theme('footer.hover')};
  padding: 0 2px;
  cursor: pointer;
`
