import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const SettingWrapper = styled.div`
  ${css.circle(36)};
  ${css.flex('align-both')};

  background: #03343f;
  &:hover {
    border-color: #005759;
    cursor: pointer;
  }
`
export const Avatar = styled(Img)`
  ${css.circle(18)};
  margin-right: 12px;
`
export const SettingIcon = styled(Img)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
