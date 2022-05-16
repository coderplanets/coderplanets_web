import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
  position: relative;
`
export const Main = styled.div`
  ${css.flexColumnGrow()};
  margin-left: 6px;
`
export const AvatarWrapper = styled.div`
  ${css.flexColumn('align-both')};
`
export const UpvoteWrapper = styled.div`
  margin-top: 10px;
  margin-left: 5px;
`
export const Avatar = styled(Img)`
  ${css.circle(36)};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatar.opacity')};
  margin-top: 2px;
`
export const SmallAvatar = styled(Avatar)`
  ${css.size(35)};
`
