import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('justify-center')};

  padding: 5px 12px;
  padding-top: 12px;
`
export const Item = styled.div`
  ${css.flex('align-center')};

  color: ${theme('thread.articleTitle')};
  margin-bottom: 8px;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`
export const DotWrapper = styled.div<TActive>`
  display: ${({ active }) => (active ? 'block' : 'none')};
`
