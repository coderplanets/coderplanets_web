import styled from 'styled-components'

import { Img } from '../..'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  flex-grow: 1;
`
export const InnerBtnWrapper = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`

export const FilterIcon = styled(Img)`
  fill: ${theme('font')};
  width: 16px;
  height: 16px;
  margin-top: 2px;
  margin-left: 3px;
`

export const SelectPanelWrapper = styled.div`
  width: 280px;
  margin-left: 20px;
`

export const SelectTitle = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('font')};
  font-weight: bold;
  width: 80%;
  padding-bottom: 5px;
  margin-bottom: 10px;

  color: ${theme('font')};
`

export const SelectItem = styled.div`
  margin-bottom: 10px;
  color: ${({ active, item }) =>
    active === item ? theme('font') : theme('banner.desc')};
  &:hover {
    cursor: pointer;
    color: ${theme('font')};
  }
`
