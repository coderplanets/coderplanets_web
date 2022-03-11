import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'
import ApplySVG from '@/icons/Apply'

export const Wrapper = styled.div`
  position: relative;
  ${css.flexColumn('align-both')};
  color: ${theme('thread.articleDigest')};
  /* background-image: linear-gradient(#043B49, #022A35); */
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
  height: 430px;
`
export const IntroTitle = styled.div`
  position: relative;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: -10px;
`
export const InputsWrapper = styled.div`
  ${css.flexColumn('align-both')};
  margin-left: 15px;
`
export const InputBox = styled(Input)`
  width: 400px;
  border-radius: 10px;
  ::placeholder {
    font-size: 13px;
  }
`
export const Notes = styled.div`
  width: 400px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  padding: 14px 10px;
`
export const NoteLink = styled.a`
  text-decoration: none;
  color: #139c9e;
  margin-left: 2px;
  margin-right: 2px;

  &:hover {
    color: #139c9e;
    text-decoration: underline;
  }
`
export const ApplyIcon = styled(ApplySVG)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(18)};
  margin-right: 10px;
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
  ${css.flex('align-center', 'justify-center')};
  width: 300px;
  bottom: 40px;
`
export const CommunityName = styled.span`
  ${css.cutRest('50px')};
  margin-left: 1px;
  margin-right: 1px;
`
