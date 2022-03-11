import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-right: 25px;
  /*  width of filter bar */
  min-width: 150px;
  width: 150px;
`

export const FilterWrapper = styled.div`
  margin-left: -5px;
`

export const NaviFooter = styled.div`
  ${css.flexColumn('align-start')};
  border-top: 1px solid;
  border-top-color: #0d4353;
  margin-left: -5px;
  padding-top: 25px;
  color: ${theme('thread.articleDigest')};
  padding-left: 5px;
  margin-top: 20px;
`
export const Terms = styled.div`
  ${css.flex('align-center')};
  margin-top: 16px;
`
export const TermItem = styled.div`
  font-weight: bold;
  opacity: 0.8;
  color: ${theme('thread.articleDigest')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
    cursor: pointer;
  }
`
