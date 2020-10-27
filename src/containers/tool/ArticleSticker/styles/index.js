import styled from 'styled-components'

import Img from '@/Img'
import { theme, css, animate } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-center', 'justify-start')};
  min-width: ${css.ARTICLE_STICKER_WIDTH};
  /* bottom has a go-to-top button */
  height: 80vh;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('justify-between')}
  height: 100%;
  margin-left: 10px;

  ${css.media.laptopL`
    margin-left: -30px;
  `}
`
export const MainWrapper = styled.div`
  ${css.flexColumn('align-center')};
`
export const ItemWrapper = styled.div`
  ${css.flexColumn('align-both')};
  position: relative;
  width: 80px;
`
export const ItemHint = styled.div`
  color: ${theme('thread.articleDigest')};
  position: absolute;
  right: ${({ right }) => right || '-12px'};
  bottom: ${({ bottom }) => bottom || '0'};
  font-size: 12px;
  opacity: 0;

  ${ItemWrapper}:hover & {
    opacity: 1;
  }

  transition: all 0.25s;
  transition-delay: 0.5s;
`
const Icon = styled(Img)`
  width: 22px;
  height: 22px;
  display: block;
  transition: all 0.25s;
  cursor: pointer;
`
export const CommunityIcon = styled(Icon)``
export const CommunityTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-bottom: 8px;
`
export const Divider = styled.div`
  width: 50px;
  height: 1px;
  background: #004250;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const LikeIcon = styled(Icon)`
  fill: #0c5473;
  width: 20px;
  height: 20px;
  margin-left: 2px;

  &:hover {
    fill: ${theme('baseColor.red')};
    animation: ${animate.pulse} 0.25s linear;
  }
`
export const CollectIcon = styled(Icon)`
  fill: #0c5473;

  &:hover {
    fill: #107eae;
    cursor: pointer;
  }
`
export const ShareIcon = styled(Icon)`
  fill: #0c5473;
  width: 16px;
  height: 16px;
  margin-left: -1px;
`
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
