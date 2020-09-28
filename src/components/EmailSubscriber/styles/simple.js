import styled from 'styled-components'

import { Button } from '@/components/Buttons'
import Input from '@/components/Input'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flex('align-center')};
  position: relative;
  width: 95%;
`
export const SubscribeInput = styled(Input)`
  background: #07303e;
  border: 1px solid;
  border-color: #1d4761;
  /* background: #0e3f4e; */
  height: 36px;
  padding-right: 92px;
  border-radius: 6px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    background: #07303e;
  }
`
export const SubscribeBtnWrapper = styled.div`
  position: absolute;
  right: 8px;
`
export const SubscribeBtn = styled(Button)`
  /* margin-left: 15px; */
  /* margin-right: 18px; */
  filter: saturate(0.8);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 10px;

  /* padding: 4px 10px;
  padding-top: 3px; */
  /* height: 26px; */

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
