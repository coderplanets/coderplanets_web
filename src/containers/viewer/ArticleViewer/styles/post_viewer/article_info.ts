import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import CollectionSVG from '@/icons/CollectionBookmark'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  height: 60px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
`
export const CollectWrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
export const CollectIcon = styled(CollectionSVG)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};

  ${CollectWrapper}:hover & {
    fill: #129497;
  }
  transition: fill 0.2s;
`
export const CollectText = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  margin-top: 1px;
  margin-left: 4px;

  ${CollectWrapper}:hover & {
    color: #129497;
  }
  transition: color 0.2s;
`
export const BaseWrapper = styled.div`
  ${css.flex('align-center')};
`
export const UpvoteWrapper = styled.div``
