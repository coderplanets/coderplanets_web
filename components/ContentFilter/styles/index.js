import styled from 'styled-components'
import ReactSVG from 'react-svg'

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

export const FilterIcon = styled(ReactSVG)`
  fill: ${theme('font')};
  width: 14px;
  height: 14px;
  margin-top: 1px;
  margin-left: 3px;
`

export const SelectPanelWrapper = styled.div`
  width: 280px;
`

export const SelectTitle = styled.div`
  border-bottom: 1px solid #eaeaea;
  font-weight: bold;
  width: 80%;
  padding-bottom: 5px;
  margin-bottom: 10px;

  color: ${theme('font')};
`

export const SelectItem = styled.div`
  margin-bottom: 10px;
  color: ${props =>
    props.active === props.item ? theme('font', props) : 'grey'};
  &:hover {
    cursor: pointer;
    color: ${theme('font')};
  }
`
