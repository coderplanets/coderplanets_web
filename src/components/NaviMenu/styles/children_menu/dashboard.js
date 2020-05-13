import styled from 'styled-components'

import Img from '@/Img'
import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-start')};
  justify-content: ${({ joinMode }) => (joinMode ? 'space-between' : 'center')};

  width: 140px;
  height: ${({ joinMode }) => (joinMode ? '70px' : '35px')};
  font-weight: ${({ joinMode }) => (joinMode ? 'normal' : 'bold')};
  color: #7c8f90;
  background: #003948;
  padding: 6px;
  padding-right: 10px;
  padding-bottom: 0;
  padding-top: ${({ joinMode }) => (joinMode ? '6px' : '0')};
  margin-top: 5px;
  margin-bottom: 0;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.42);
  border-radius: 4px;
`
export const Title = styled.div`
  margin-left: ${({ joinMode }) => (joinMode ? '10px' : '6px')};
`
export const Footer = styled.div`
  ${cs.flex()};
`
export const FilterOption = styled.div`
  border-bottom: 2px solid;
  border-bottom-color: ${({ active }) => (active ? '#7c8f90' : 'transparent')};
  margin-left: 8px;
  padding-bottom: 5px;
`
export const OptionIcon = styled(Img)`
  fill: #7c8f90;
  width: 16px;
  height: 16px;
  display: block;

  &:hover {
    cursor: pointer;
  }
`
