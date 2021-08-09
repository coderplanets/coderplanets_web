import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'
import HashTagSVG from '@/icons/HashTag'

export const Wrapper = styled.div`
  margin-bottom: 8px;
`
export const FolderTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-left: 2px;
  margin-bottom: 10px;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`

export const RemoveIcon = styled(Img)`
  ${css.size(14)};
  fill: ${theme('baseColor.red')};
  opacity: 0.8;
  margin-left: 10px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
