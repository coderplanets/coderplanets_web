import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-both')}
  position: absolute;
  left: calc(50% - 10px);
  top: 4px;
`
export const SettingPanelWrapper = styled.div`
  width: 120px;
`
export const SettingItem = styled.div`
  ${css.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 4px;
  padding: 4px 5px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const SettingDivider = styled.div`
  background-color: ${theme('thread.articleDigest')};
  opacity: 0.5;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  height: 1px;
`
export const SelectIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};
`
export const SelectDot = styled.div`
  background: ${theme('thread.articleDigest')};
  ${css.size(5)};
  border-radius: 50%;
  margin-right: 5px;
`
