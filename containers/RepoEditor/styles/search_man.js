import styled from 'styled-components'
// import Img from 'Img'
import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};

  padding-top: 20px;
  padding-bottom: 30px;
  height: auto;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
  position: relative;
`
export const FormWrapper = styled.div`
  ${cs.flexColumnGrow('align-both')};

  width: 100%;
  margin-top: -10%;
`
export const Letter = styled.span`
  color: ${({ color }) => color};
  margin-right: 5px;
  opacity: 0.8;
`
export const SearchTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`
export const InputWrapper = styled.div`
  width: 85%;
  margin-left: 15%;
`
export const TokeInputWrapper = styled.div`
  width: 60%;
  margin-bottom: -10px;
`
export const Footer = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('banner.desc')};
  font-size: 0.9rem;
`

export const SetTokenWapper = styled.span`
  margin-left: 3px;
  margin-right: 3px;
  color: ${theme('banner.desc')};
  font-weight: bold;
  opacity: 0.8;
  &:hover {
    color: ${theme('banner.title')};
    opacity: 1;
    cursor: pointer;
  }
`

export const SetTokenDesc = styled.div`
  color: ${theme('banner.desc')};
  margin-bottom: 15px;
`

export const SetTokenIssue = styled.a`
  margin-left: 3px;
  margin-right: 3px;
  font-weight: bold;
  text-decoration: underline;
  color: ${theme('banner.desc')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`
