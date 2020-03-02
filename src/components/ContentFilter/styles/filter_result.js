import styled from 'styled-components'

import { theme, cs } from '@utils'
import Img from '@Img'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`
export const ResultText = styled.div`
  margin-right: 4px;
  color: ${theme('thread.filterResultHint')};
  min-width: 75px;
`
export const ResultDivider = styled.div`
  width: 1px;
  height: 12px;
  margin-left: 5px;
  background-color: ${theme('thread.filterResultHint')};
`
export const MoreOptionWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-left: 10px;
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
