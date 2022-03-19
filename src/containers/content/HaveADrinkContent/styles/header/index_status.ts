import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'
import ArrowSVG from '@/icons/ArrowSolid'

export const Wrapper = styled.div`
  ${css.flex('align-center')}
  color: ${theme('thread.articleDigest')};
`
export const Text = styled.span`
  opacity: 0.8;
`
export const CurNum = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-left: 2px;
`
export const TotalNum = styled.span`
  margin-left: 4px;
  margin-right: 5px;
  color: ${theme('thread.articleDigest')};
`
export const Divider = styled.div`
  margin-left: 5px;
  margin-right: 2px;
`
export const CategoryBtn = styled.div`
  ${css.flex('align-center')};
  color: ${theme('button.primary')};
  margin-left: 2px;
  margin-right: 2px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`
export const ArrowIcon = styled(ArrowSVG)`
  ${css.size(12)};
  margin-top: 2px;
  fill: ${theme('button.primary')};
  margin-left: 4px;
  transform: rotate(90deg);
  opacity: 0.6;

  ${CategoryBtn}:hover & {
    opacity: 1;
  }
`
