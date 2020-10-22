import styled from 'styled-components'

import Img from '@/Img'
import { theme, css, animate } from '@/utils'

export const Wrapper = styled.article`
  ${css.flexColumn('justify-center')};
  /* border: 1px solid; */
  padding-left: 40px;
`
export const ItemWrapper = styled.div`
  ${css.flexColumn('align-both')};
`
export const LikeIcon = styled(Img)`
  fill: #0c5473;
  width: 26px;
  height: 26px;
  display: block;

  &:hover {
    fill: ${theme('baseColor.red')};
    cursor: pointer;
    animation: ${animate.pulse} 0.25s linear;
  }

  transition: all 0.25s;
`

export const CollectIcon = styled(Img)`
  fill: #0c5473;
  width: 22px;
  height: 22px;
  display: block;

  &:hover {
    fill: #107eae;
    cursor: pointer;
  }

  transition: all 0.25s;
`
export const ShareIcon = styled(CollectIcon)`
  width: 16px;
  height: 16px;
  margin-left: -1px;
`
// export const CollectIcon = styled(Img)`
//   fill: #00333f;
//   width: 22px;
//   height: 22px;
//   display: block;

//   &:hover {
//     fill: #107EAE;
//     cursor: pointer;
//   }

//   transition: all 0.25s;
// `

export const Number = styled.div`
  ${css.flex('align-baseline')};
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-top: 5px;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
`
