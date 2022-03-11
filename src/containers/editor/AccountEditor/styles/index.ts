import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import GithubSVG from '@/icons/Github8'
import FormInput from '@/widgets/Input'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};

  padding-top: 20px;
  padding-bottom: 50px;
  height: auto;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  position: relative;
`
export const AvatarPic = styled(Img)`
  ${css.size(140)};
  border-radius: 42%;
  border: 4px solid;
  border-color: #043443;
  margin-left: -5px;
`
export const FormsWrapper = styled.div`
  ${css.flexColumn('align-center')};
`
export const Section = styled.div`
  width: 100%;
  margin-bottom: 25px;
  outline: none;
`
export const RowSection = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 28px;
`
export const LoginSection = styled.div`
  width: 100%;
  ${css.flex('align-center')};
  margin-bottom: 15px;
`
export const LoginDesc = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 8px;
`
export const GithubIcon = styled(GithubSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.5;
  margin-right: 20px;
  margin-bottom: 7px;
`
export const SectionHint = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 12px;
  margin-top: 6px;
  margin-left: 12px;
`
export const Label = styled.div`
  ${css.flex('justify-between', 'align-end')};
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 8px;
  margin-left: 5px;
  margin-right: 10px;
  opacity: 0.85;
`
export const SexLabel = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-left: 7px;
  margin-right: 10px;
  opacity: 0.85;
`
export const Input = styled(FormInput)`
  text-align: left;
  padding: 5px 5px;
  padding-left: 12px;
  height: 36px;
  width: 280px;
  font-size: 15px;
`
export const TextareaInput = styled(Input)`
  padding: 10px;
  padding-left: 12px;
  font-size: 14px;
  line-height: 1.5;
`
export const Footer = styled.div`
  margin-left: -15px;
`
