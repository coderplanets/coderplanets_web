import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('justify-center')};

  padding: 15px;
  width: 270px;
`
export const Header = styled.div`
  ${cs.flex('align-center')};
`
export const Result = styled.div`
  ${cs.flexColumn()};
`
export const SearchWrapper = styled.div`
  ${cs.flex('justify-center')};
  margin-top: 20px;
`
export const Divider = styled.div`
  width: 100%;
  border-top: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  opacity: 0.4;
  margin-top: 15px;
  margin-bottom: 10px;
`
export const Footer = styled.div`
  ${cs.flex('justify-center')};
`
export const AdderIcon = styled(Img)`
  width: 17px;
  height: 17px;
  fill: ${theme('thread.articleDigest')};
  display: block;
  margin-right: 3px;
  &:hover {
    fill: ${theme('thread.articleTitle')};
  }
`
export const AddBtn = styled.div`
  ${cs.flex('justify-center')};
  align-items: center;
  width: 80px;
  color: ${theme('thread.articleTitle')};
  border: 1px solid;
  border-radius: 4px;
  border-color: ${theme('thread.articleDigest')};

  &:hover {
    border: 1px solid;
    border-color: ${theme('thread.articleTitle')};
    cursor: pointer;
    font-weight: bold;
  }
`

export const LabelIcon = styled(Img)`
  fill: ${theme('form.text')};
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 6px;
`
export const SearchInput = styled.input`
  background-color: ${theme('form.inputBg')};
  color: ${theme('form.text')};
  border: 1px solid;
  border-color: ${theme('form.border')};
  outline: none;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
  background-image: none;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &:focus {
    border-color: ${theme('form.border')};
    border-left: 4px solid ${theme('banner.title')};
    border-right: 4px solid ${theme('banner.title')};
    box-shadow: 0 0 0 0 rgba(24, 144, 255, 0);
  }
  &:hover {
    box-shadow: 0 0 0 1px ${theme('form.shadow')};
  }

  ::placeholder {
    color: ${theme('form.text')};
    opacity: 0.5;
  }
`
