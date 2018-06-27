import styled from 'styled-components'

import { theme, themeCoverMap, themeCoverIndexMap } from '../../../utils'

/* background: ${({ type }) => getBackground(type)}; */

export const ThemeDot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-right: 10px;
  background: ${({ type }) => themeCoverMap[type]};
  position: relative;
  cursor: pointer;
  color: ${({ active, type }) =>
    active ? theme('bodyBg') : themeCoverMap[type]};

  &:after {
    content: 'T';
    position: absolute;
    color: ${({ active, type }) => (active ? themeCoverIndexMap[type] : '')};
    top: 14%;
    left: 35%;
  }
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`
