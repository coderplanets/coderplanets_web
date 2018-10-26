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
export const ActiveTagsWrapper = styled.div`
  margin-left: 15px;
  margin-top: -1px;
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
  margin-right: 28px;
`
export const SelectLable = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${theme('banner.desc')};
  padding-bottom: 6px;
  margin-bottom: 8px;
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
export const SelectItem = styled.div`
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: ${({ active }) => (active ? theme('font') : theme('banner.desc'))};
  &:hover {
    cursor: pointer;
    color: ${theme('font')};
  }
`
