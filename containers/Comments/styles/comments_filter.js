import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { smokey } from '../../../utils'

export const FilterWraper = styled.div`
  margin-right: 8px;
  margin-top: 8px;
  ${smokey};
`
export const Header = styled.div`
  display: flex;
  color: #5d8689;
`

export const FilterIcon = styled(ReactSVG)`
  fill: #5d8689;
  margin-right: 3px;
  width: 20px;
  height: 20px;
  transform: ${props => (props.reverse ? 'rotate(180deg)' : '')};
`

export const MenuWrapper = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

export const MenuItem = styled.div`
  margin-bottom: 10px;
  color: ${props => (props.active === props.type ? '#58afb5' : '')};
  &:hover {
    cursor: pointer;
    color: #58afb5;
  }
`
