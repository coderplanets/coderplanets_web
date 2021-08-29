import styled from 'styled-components'

import type { TRadar, TID, TC11N } from '@/spec'
import css from '@/utils/css'

import { getOpacity } from './metric'

type TWrapper = { entry: TRadar; activeId: TID; c11n: TC11N }
export const Wrapper = styled.article<TWrapper>`
  ${css.flex('align-start')};
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 18px;
  margin-right: 0;
  background: #0d3644;
  border-radius: 8px;

  position: relative;
  padding: 14px;
  padding-top: 16px;
  opacity: ${({ entry, activeId, c11n }) => getOpacity(entry, activeId, c11n)};

  transition: all 0.25s;
`

export const holder = 1
