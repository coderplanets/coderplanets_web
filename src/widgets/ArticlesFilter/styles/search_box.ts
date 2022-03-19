import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import SearchSVG from '@/icons/HeaderSearch'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 2px;
  cursor: pointer;
`
export const SearchIcon = styled(SearchSVG)`
  ${css.size(15)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 8px;
  margin-top: -1px;
`
export const Text = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 13px;
  font-weight: 400;
`
