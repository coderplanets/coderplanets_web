import styled from 'styled-components'

import Img from '@/Img'
import { Button } from '@/components/Buttons'
import Input from '@/components/Input'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  position: relative;
  padding: 0 10px;
  padding-top: 5px;
  padding-left: 12px;
`
export const SignIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  top: -3px;
  right: 5px;
  width: 35px;
  height: 35px;
  display: block;
  opacity: 0.5;
  transform: rotate(-10deg);
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 5px;
  font-weight: bold;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
  margin-bottom: 5px;
`
export const SubscribeInput = styled(Input)`
  background: #07303e;
  border-bottom: 1px solid;
  border-bottom-color: #1d4761;
  width: 90%;
  height: 32px;
  border-radius: 0;
  padding-left: 1px;

  &:hover {
    border: none;
    border-bottom: 1px solid;
    border-color: #1d4761;
    background: #07303e;
  }
  &:focus {
    border: none;
    border-bottom: 1px solid;
    border-color: #1d4761;
    background: #07303e;
  }
`
export const SubscribeBtnWrapper = styled.div`
  ${cs.flex('justify-center', 'align-center')};
  margin-top: 20px;
  margin-left: -10px;
`
export const SubscribeBtn = styled(Button)`
  transition: all 0.25s;
  margin-left: 10px;
`
export const Cancel = styled.div`
  color: ${theme('button.primary')};
  font-size: 11px;
  margin-top: 1px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
