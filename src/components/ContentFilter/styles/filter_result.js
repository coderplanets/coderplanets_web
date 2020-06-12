import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`
export const ResultText = styled.div`
  color: ${theme('thread.filterResultHint')};
  margin-right: 3px;
`
export const ResultDivider = styled.div`
  width: 1px;
  height: 12px;
  margin: 0 10px;
  background-color: ${theme('thread.filterResultHint')};
`
export const MoreOptionWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const FaqText = styled.div`
  background-color: ${({ active }) =>
    active ? theme('button.primary') : '#104456'};
  border-radius: 3px;
  padding: 0 6px;
  font-size: 12px;
  color: ${({ active }) => (active ? theme('button.fg') : '#3e8dbf')};

  &:hover {
    color: ${({ active }) => (active ? theme('button.fg') : '#3e8dbf')};
    cursor: pointer;
  }
`
export const MoreDivider = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${theme('thread.filterResultHint')};
  margin-left: 8px;
  margin-right: 8px;
`
export const SettingIcon = styled(Img)`
  fill: ${theme('thread.filterResultHint')};
  width: 15px;
  height: 15px;
  display: block;
  &:hover {
    fill: ${theme('thread.articleDigest')};
    cursor: pointer;
  }
`
