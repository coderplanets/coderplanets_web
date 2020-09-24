import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'

export const Main = styled.div`
  ${cs.flexColumnGrow()};
`
export const AvatarWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export const Avatar = styled(Img)`
  ${cs.circle('36px')};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatarOpacity')};
  display: block;
  margin-top: 2px;

  ${cs.media.mobile`${cs.circle('34px')}`};
`
export const AvatarFallback = styled.div`
  ${cs.flex('align-both')};
  ${cs.circle('38px')};
  font-size: 20px;
  color: ${theme('thread.articleTitle')};
  background-color: #164858; /*${theme('thread.articleHover')}; */
`
export const SmallAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
`

// import styled from 'styled-components'

// import { theme, cs } from '@/utils'

// export const Wrapper = styled.div`
//   ${cs.flexColumn()};
//   width: 100%;
// `
// export const ContentWrapper = styled.div`
//   ${cs.flex()};
// `
// export const Divider = styled.div`
//   border-bottom: 1px solid;
//   border-bottom-color: ${theme('thread.articleDigest')};
//   opacity: 0.4;
//   width: 100%;
//   margin-top: 5px;
//   margin-bottom: 3px;
// `
