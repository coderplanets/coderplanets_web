import styled from 'styled-components'

import { theme, themeCoverMap, themeCoverIndexMap, cs } from '@utils'

export const Dot = styled.div`
  ${cs.circle('25px')};

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
