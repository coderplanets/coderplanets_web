import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`
export const MainFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`
export const FiltrPanelWrapper = styled.div`
  display: flex;
  min-width: 200px;
  padding: 12px;
`
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  margin-right: 22px;
`
export const SelectLable = styled.div`
  display: flex;
  align-items: center;
`
export const LabelDivider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('banner.desc')};
  width: 90%;
  margin-top: 5px;
  margin-bottom: 10px;
  opacity: 0.6;
`
export const SelectIcon = styled(Img)`
  fill: ${theme('banner.title')};
  display: block;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-right: 3px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const SelectTitle = styled.div`
  color: ${theme('banner.title')};
  font-size: 0.9rem;
  font-weight: bold;
  width: 80%;
`
export const LeftAlignWrapper = styled.div`
  text-align: left;
`
export const SelectItem = styled.div`
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: ${({ active }) => (active ? theme('font') : theme('banner.desc'))};
  position: relative;
  &:hover {
    cursor: pointer;
    color: ${theme('font')};
  }
  &:before {
    content: '*';
    color: ${theme('banner.title')};
    opacity: ${({ active }) => (active ? 1 : 0)};
    font-weight: lighter;
    position: absolute;
    left: -10px;
    top: 2px;
  }
`
