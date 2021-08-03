import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const Header = styled.div`
  ${css.flex('align-end', 'justify-between')};
  margin-bottom: 12px;
  margin-top: -4px;
`
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: 26px;
  margin-bottom: 26px;
  opacity: 0.6;
`
export const More = styled.div`
  opacity: 0;
  ${Header}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
`
