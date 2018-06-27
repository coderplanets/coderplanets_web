import styled from 'styled-components'

import { theme, themeCoverMap, themeCoverIndexMap } from '../../../utils'

export const ThemeDot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
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
    top: 14%;
    left: 35%;
  }
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`
