import styled from 'styled-components'

import type { TRadar, TC11N } from '@/spec'
import css, { theme } from '@/utils/css'

import { getOpacity } from './metric'

type TWrapper = { entry: TRadar; c11n: TC11N }
export const Wrapper = styled.article<TWrapper>`
  ${css.flex('align-start')};
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 18px;
  margin-right: 0;
  background: ${theme('content.bg')};
  border-radius: 12px;
  border: 1px solid;
  border-color: transparent;

  position: relative;
  padding: 14px;
  padding-top: 16px;
  opacity: ${({ entry, c11n }) => getOpacity(entry, c11n)};

  transition: all 0.2s;

  &:hover {
    border-color: #124d61;
  }

  ${css.media.mobile`
    padding: 8px;
    padding-top: 8px;
    padding-bottom: 6px;
    margin-bottom: 12px;
  `};
`

export const holder = 1
