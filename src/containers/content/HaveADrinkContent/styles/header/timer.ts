import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexGrow('align-both')}
  width: 20%;
  padding-left: 6px;
`
export const SettingPanelWrapper = styled.div`
  width: 120px;
`
export const SettingItem = styled.div`
  ${css.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 4px;

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
