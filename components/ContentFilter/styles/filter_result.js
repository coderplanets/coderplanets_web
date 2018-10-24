import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
export const ResultText = styled.div`
  margin-right: 4px;
  color: ${theme('thread.filterResultHint')};
`
export const SettingWrapper = styled.div``
export const SettingIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  display: block;
  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
