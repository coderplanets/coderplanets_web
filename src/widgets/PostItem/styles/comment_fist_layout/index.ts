import styled from 'styled-components'

import type { TC11N } from '@/spec'
import css, { theme } from '@/utils/css'

type TWrapper = {
  c11n: TC11N
}

export const Wrapper = styled.article<TWrapper>`
  ${css.flex()};
  position: relative;

  padding-top: ${({ c11n }) => (c11n.contentDivider ? '10px' : '8px')};
  padding-bottom: ${({ c11n }) => (c11n.contentDivider ? '14px' : '8px')};
  border-bottom: ${({ c11n }) => (c11n.contentDivider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};
  margin-bottom: 10px;

  transition: all 0.2s;
`
export const Main = styled.div`
  ${css.flexColumnGrow()};
`
export const holder = 1
