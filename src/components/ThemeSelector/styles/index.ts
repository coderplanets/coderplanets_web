import styled from 'styled-components'

import type { TActive, TThemeName } from '@/spec'
import { theme, themeCoverMap, themeCoverIndexMap } from '@/utils/themes'
import css from '@/utils/css'

type TDot = TActive & { name: TThemeName }
export const Dot = styled.div<TDot>`
  ${css.circle(25)};

  margin-right: 10px;
  background: ${({ name }) => themeCoverMap[name]};
  border: ${({ name }) => (name === 'github' ? '1px solid lightgrey' : '')};
  position: relative;
  cursor: pointer;
  color: ${({ active, name }) =>
    active ? theme('bodyBg') : themeCoverMap[name]};

  &:after {
    content: 'T';
    position: absolute;
    color: ${({ active, name }) => (active ? themeCoverIndexMap[name] : '')};
    top: 13%;
    left: 34%;
  }
`
export const holder = 1
