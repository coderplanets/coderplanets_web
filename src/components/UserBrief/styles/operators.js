import styled from 'styled-components'

import { cs, theme } from '@utils'
import Img from '@Img'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  width: 100%;
`
export const LogoutBtn = styled.div`
  margin-right: 10px;
  ${cs.flex('align-center')};
`
export const LogoutIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 18px;
  height: 18px;
  display: block;
  margin-top: -2px;
  ${LogoutBtn}:hover & {
    fill: ${theme('baseColor.error')};
    cursor: pointer;
  }
  transition: all 0.3s;
`
export const LogoutText = styled.div`
  color: ${theme('baseColor.error')};
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
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 4px;

  &:hover {
    fill: ${theme('banner.title')};
  }
  transition: opacity 0.2s;
`
