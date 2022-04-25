import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'
import AdminStarSVG from '@/icons/AdminStar'

export const Wrapper = styled.div`
  ${css.flex('align-start')};
  margin-bottom: 15px;
`
export const AvatarWrapper = styled.div`
  position: relative;
`
export const Avatar = styled(Img)`
  ${css.circle(40)};
  margin-right: 10px;
  margin-bottom: 20px;
  border: 2px solid;
  border-color: ${theme('thread.articleTitle')};
  padding: 2px;
`
export const BadgeWrapper = styled.div`
  ${css.circle(14)};
  ${css.flex('align-both')};
  background: ${theme('thread.articleTitle')};
  padding: 1px;
  border: 2px solid white;
  position: absolute;
  right: 10px;
  bottom: 18px;
  z-index: 2;
`
export const Info = styled.div``
export const Name = styled.div`
  ${css.cutRest('140px')};
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-bottom: 2px;
  font-weight: 600;
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  ${css.lineClamp(2)};
  opacity: 0.8;
  padding-right: 22px;
`
export const BadgeIcon = styled(AdminStarSVG)`
  ${css.size(10)};
  fill: white;
`