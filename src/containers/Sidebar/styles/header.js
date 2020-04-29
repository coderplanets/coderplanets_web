import styled from 'styled-components'

import Input from '@components/Input'
import Img from '@Img'

import { theme, cs } from '@utils'
import { Wrapper as IndexWrapper } from './index'

export const Wrapper = styled.div`
  margin-top: 14px;
  margin-bottom: ${({ pin }) => (pin ? '0' : '20px')};
  ${IndexWrapper}:hover & {
    margin-bottom: 4px;
  }
`
export const InnerWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const HeaderFuncs = styled.div`
  ${cs.flexGrow()};
  margin-top: -5px;
`
export const PinIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export const SiteLogoWrapper = styled.div`
  margin-left: 15px;
  color: ${theme('sidebar.logoText')};
  letter-spacing: 1px;
  margin-top: -4px;
  display: ${({ pin }) => (pin ? 'none' : 'block')};
  ${IndexWrapper}:hover & {
    display: none;
  }
`
export const SiteLogo = styled(Img)`
  fill: ${theme('banner.title')};
  width: 25px;
  height: 25px;
  opacity: 0.6;
  display: block;
  margin-top: -2px;
`
export const PinIcon = styled(Img)`
  fill: ${({ pin }) => (pin ? theme('sidebar.pinActive') : 'grey')};
  margin-right: 10px;
  width: 23px;
  height: 23px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};
  transition: visibility 0s, opacity 0.3s linear;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
  ${IndexWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
export const SearchWrapper = styled.div`
  padding-left: 16px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};

  ${IndexWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
export const SearchInput = styled(Input)`
  border: 1px solid;
  border-color: ${theme('sidebar.bg')};
  border-bottom-color: ${theme('sidebar.searchInputBottom')};
  height: 28px;
  margin-top: -4px;
  border-radius: 0px;
  margin-left: 5px;
  line-height: 20px;

  width: 50%;
  font-size: 1rem;
  background: ${theme('sidebar.bg')};
  padding-left: 5px;
  color: ${theme('sidebar.menuLink')};
  text-align: left;

  ::placeholder {
    color: ${theme('sidebar.searchInputHolder')};
  }

  &:hover {
    color: ${theme('sidebar.menuLink')};
    border-color: ${theme('sidebar.bg')};
    border-bottom: 1px solid;
    border-bottom-color: ${theme('sidebar.searchInputBottom')};
  }
  &:focus {
    border-color: ${theme('sidebar.bg')};
    box-shadow: none;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('sidebar.searchInputBottomActive')};
    color: ${theme('sidebar.menuLink')};
    text-align: left;
  }
`
export const SearchContent = styled.div`
  ${cs.flex('align-center')};
`
export const SearchIcon = styled(Img)`
  fill: ${theme('button.primary')};
  width: 16px;
  height: 16px;
  margin-right: 5px;
  display: block;
  margin-top: -1px;
`
