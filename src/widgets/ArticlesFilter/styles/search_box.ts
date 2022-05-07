import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'
import SearchSVG from '@/icons/HeaderSearch'
import CloseSVG from '@/widgets/Icons/CloseCross'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  position: relative;
  margin-left: 2px;
  cursor: pointer;
`
export const InputWrapper = styled(Wrapper)`
  cursor: default;
  width: 100%;
`
export const Inputer = styled(Input)`
  cursor: text;
  width: 100%;
  padding-left: 25px;
  padding-bottom: 5px;
`

export const SearchIcon = styled(SearchSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  z-index: 1;
  margin-right: 8px;
  margin-top: -1px;
  opacity: 0.6;
`
export const InputSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 0;
  top: 8px;

  margin-right: 0;
  margin-top: 0;
`
export const CloseIcon = styled(CloseSVG)`
  ${css.size(15)};
  position: absolute;
  right: 0;
  top: 10px;
  fill: ${theme('thread.articleDigest')};
  opacity: 0.4;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  transition: all 0.2s;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  font-weight: 400;
  opacity: 0.8;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 0.8;
  }
`
