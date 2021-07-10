import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
`
export const MainWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  background: ${theme('content.bg')};
  border-radius: 6px;

  padding-top: 15px;
  padding-left: 25px;
  padding-right: 24px;
  margin-right: 42px;
`
export const FilterWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
  ${css.media.mobile`margin-bottom: 4px;`};
  margin-left: -5px;
`
