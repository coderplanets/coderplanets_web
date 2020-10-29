import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Main = styled.div`
  ${css.flexColumnGrow()};
`
export const AvatarWrapper = styled.div`
  cursor: pointer;
`
export const Avatar = styled(Img)`
  ${css.circle('36px')};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatarOpacity')};
  margin-top: 2px;

  ${css.media.mobile`${css.circle('34px')}`};
`
export const AvatarFallback = styled.div`
  ${css.flex('align-both')};
  ${css.circle('38px')};
  font-size: 20px;
  color: ${theme('thread.articleTitle')};
  background-color: #164858;
`
export const SmallAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
`

// import styled from 'styled-components'

// import { theme, css } from '@/utils'

// export const Wrapper = styled.div`
//   ${css.flexColumn()};
//   width: 100%;
// `
// export const ContentWrapper = styled.div`
//   ${css.flex()};
// `
// export const Divider = styled.div`
//   border-bottom: 1px solid;
//   border-bottom-color: ${theme('thread.articleDigest')};
//   opacity: 0.4;
//   width: 100%;
//   margin-top: 5px;
//   margin-bottom: 3px;
// `
