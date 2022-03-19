import styled from 'styled-components'

import Input from '@/widgets/Input'
import Img from '@/Img'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  margin-top: 14px;
  margin-bottom: 4px;
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center')};
`
export const HeaderFuncs = styled.div`
  ${css.flexGrow('align-center')};
  margin-top: -2px;
`
export const PinIconWrapper = styled.div`
  cursor: pointer;
`
export const MenuWrapper = styled.div`
  margin-left: 17px;
  letter-spacing: 1px;
  visibility: visible;
  width: 25px;
`
export const MenuLogo = styled(Img)<{ pin: boolean }>`
  fill: ${({ pin }) =>
    pin ? theme('sidebar.pinActive') : theme('banner.title')};
  ${css.size(18)};
  opacity: 0.5;
  cursor: pointer;
`
export const PinIcon = styled(Img)<{ pin: boolean }>`
  fill: ${({ pin }) => (pin ? theme('sidebar.pinActive') : 'grey')};
  margin-right: 10px;
  width: 23px;
  height: 23px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};
  /* transition: visibility 0s, opacity 0.3s linear; */
  cursor: pointer;
`
export const SearchWrapper = styled.div<{ pin: boolean }>`
  padding-left: 16px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};
`
export const SearchInput = styled(Input)`
  border: 1px solid;
  border-color: ${theme('sidebar.bg')};
  border-bottom-color: ${theme('sidebar.searchInputBottom')};
  height: 22px;
  margin-top: -4px;
  border-radius: 0px;
  margin-left: 5px;
  line-height: 16px;

  width: 50%;
  font-size: 13px;
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
  ${css.flex('align-center')};
`
export const SearchIcon = styled(Img)`
  fill: ${theme('button.primary')};
  ${css.size(15)};
  margin-right: 5px;
`
