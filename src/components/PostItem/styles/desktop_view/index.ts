import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Main = styled.div`
  ${css.flexColumnGrow()};
  margin-left: 8px;
`
export const AvatarWrapper = styled.div`
  cursor: pointer;
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
