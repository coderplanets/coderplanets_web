import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const LogoutBtn = styled.div`
  margin-right: 10px;
  ${css.flex('align-center')};
`
export const LogoutIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(18)};
  margin-top: -2px;
  ${LogoutBtn}:hover & {
    fill: ${theme('baseColor.red')};
    cursor: pointer;
  }
  transition: all 0.3s;
`
export const LogoutText = styled.div`
  color: ${theme('baseColor.red')};
  font-size: 0.8rem;
  display: none;
  margin-left: 5px;
  ${LogoutBtn}:hover & {
    display: block;
    cursor: pointer;
  }
`
export const EditWrapper = styled.div`
  display: block;
  flex-grow: 1;
`
export const EditIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(20)};
  cursor: pointer;
  margin-left: 5px;
  margin-top: 4px;

  &:hover {
    fill: ${theme('banner.title')};
  }
  transition: opacity 0.2s;
`
