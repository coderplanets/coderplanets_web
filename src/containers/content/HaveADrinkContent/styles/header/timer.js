import styled from 'styled-components'

import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-center')}
  justify-content: center;
  width: 20%;
  padding-left: 6px;
`
export const IconWrapper = styled.div`
  position: relative;
`
export const SettingPanelWrapper = styled.div`
  padding: 10px;
  width: 140px;
`
export const SettingItem = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 4px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  display: block;
  width: 18px;
  height: 18px;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
