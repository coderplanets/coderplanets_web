import styled from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

import SearchSVG from '@/icons/HeaderSearch'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 2px;
  cursor: pointer;
`
export const SearchIcon = styled(SearchSVG)`
  ${css.size(14)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 8px;
`
export const Text = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 14px;
`
