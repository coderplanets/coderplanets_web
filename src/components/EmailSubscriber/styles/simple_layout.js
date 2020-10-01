import styled from 'styled-components'

import Img from '@/Img'
import Input from '@/components/Input'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: relative;
  background: #0b2f3a;
  border-radius: 10px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    display: block;
    background-image: repeating-linear-gradient(
      135deg,
      #8a5953 2px,
      #8a5953 15px,
      transparent 15px,
      transparent 25px,
      #4c7ba0 25px,
      #4c7ba0 40px,
      transparent 40px,
      transparent 50px
    );
  }
`
export const InnerWrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  width: 100%;
  min-width: 260px;
  height: 35px;
  padding: 0 5px;
  padding-bottom: -3px;
  border: 1px solid;
  border-color: #154e60;
  border-bottom: none;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`
export const SubscribeInput = styled(Input)`
  background: #0b2f3a;
  border: none;
  width: 90%;
  height: 30px;
  border-radius: 0;
  padding-left: 4px;
  margin-top: -3px;

  &:hover {
    border: none;
    /* border: none;
    border-bottom: 1px solid; */
    border-color: #1d4761;
    background: #0b2f3a;
  }
  &:focus {
    border: none;
    /* border: none;
    border-bottom: 1px solid; */
    border-color: #1d4761;
    background: #0b2f3a;
  }
`
export const MailBoxIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  display: block;
  margin-right: 4px;
`
