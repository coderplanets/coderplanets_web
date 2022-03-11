import styled from 'styled-components'

import Img from '@/Img'
import Button from '@/widgets/Buttons/Button'
import Input from '@/widgets/Input'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  position: relative;
  padding: 0 10px;
  padding-top: 5px;
  padding-left: 12px;
`
export const SignIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  top: -6px;
  right: 5px;
  ${css.size(35)};
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
  opacity: 0.8;
`
export const SubscribeInput = styled(Input)`
  background: #0b2f3a;
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: #1d4761;
  width: 100%;
  height: 32px;
  border-radius: 0;
  padding-left: 1px;
  margin-top: 5px;

  &:hover {
    border: none;
    border-bottom: 1px solid;
    border-color: ${theme('button.primary')};
    background: #0b2f3a;
  }
  &:active {
    border: none;
    border-bottom: 1px solid;
    border-color: ${theme('button.primary')};
  }
  &:focus {
    border: none;
    border-bottom: 1px solid;
    border-color: ${theme('button.primary')};
    background: #0b2f3a;
  }
`
export const SubscribeBtnWrapper = styled.div`
  ${css.flex('justify-center', 'align-center')};
  margin-top: 16px;
  margin-left: -15px;
`
export const SubscribeBtn = styled(Button)`
  transition: all 0.2s;
  margin-left: 14px;
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
