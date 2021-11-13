import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { InputBar } from './input_box'

import ApplySVG from '@/icons/Apply'
import Img from '@/Img'

export const Wrapper = styled.div`
  position: relative;
  ${css.flexColumn('align-both')};
  color: ${theme('thread.articleDigest')};
  /* background-image: linear-gradient(#043B49, #022A35); */
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
  height: 280px;
`
export const IntroTitle = styled.div`
  position: relative;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: -10px;
`
export const InputBox = styled(InputBar)`
  width: 300px;
  min-width: 300px;
  font-size: 16px;
  text-align: left;
  padding: 6px 18px;
  border-radius: 8px;
  height: 38px;
  flex-grow: 0;
  ::placeholder {
    font-size: 13px;
  }
`
export const ApplyIcon = styled(ApplySVG)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(18)};
  margin-right: 10px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
`
export const StepHint = styled.div`
  position: absolute;
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  top: -35px;
  left: 41%;
  opacity: 0.5;
`
export const NextBtn = styled.div`
  position: absolute;
  ${css.flex('align-center', 'justify-around')};
  width: 200px;
  bottom: 5px;
  margin-left: -2px;
`
