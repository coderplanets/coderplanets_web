import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.circle(36)};
  ${css.flex('align-both')};

  background: #03343f;
  &:hover {
    border-color: #005759;
    cursor: pointer;
  }
`
export const SettingIcon = styled(Img)`
  ${css.size(18)};
  fill: ${theme('thread.articleDigest')};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`

export const MainPanel = styled.div`
  background: ${theme('modal.subPanel')};
  min-height: 35vh;
`
