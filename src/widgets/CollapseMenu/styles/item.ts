import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flex('align-center')};
  margin-bottom: 3px;
  padding: 5px;
  padding-left: 10px;
  max-width: 200px;
  border-radius: 5px;

  background: ${({ active }) => (!active ? 'transparent' : '#0e303d')};
`
export const Title = styled.div<TActive>`
  color: ${theme('tags.text')};
  ${css.cutRest('200px')};
  font-size: 14px;
  opacity: 0.9;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  opacity: ${({ active }) => (active ? 1 : 0.9)};

  &:hover {
    cursor: pointer;
    opacity: 1;
    font-weight: bold;
  }

  transition: all 0.2s;
`
