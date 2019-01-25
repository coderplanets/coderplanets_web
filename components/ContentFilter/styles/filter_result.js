import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`
export const ResultText = styled.div`
  margin-right: 4px;
  color: ${theme('thread.filterResultHint')};
  min-width: 75px;
`
export const SettingWrapper = styled.div``

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
