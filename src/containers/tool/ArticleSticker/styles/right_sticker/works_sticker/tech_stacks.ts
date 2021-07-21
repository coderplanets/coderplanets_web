import styled from 'styled-components'

import type { TActive } from '@/spec'
import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div<TActive>`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-left: -4px;
`
export const Tech = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
  margin-right: 10px;
  border: 1px solid;
  border-color: #144958;
  background: #0c3a4a;
  padding: 0 6px;
  border-radius: 7px;
`
export const Logo = styled(Img)`
  margin-right: 6px;
  ${css.size(15)};
`
export const Name = styled.a`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`
