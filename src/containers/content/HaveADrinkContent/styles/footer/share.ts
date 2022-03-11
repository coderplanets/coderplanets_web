import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import ShareSVG from '@/icons/Share'
import CollectSVG from '@/icons/CollectionBookmark'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-end')};
  color: ${theme('thread.articleDigest')};
`
const icon = `
${css.size(18)};
  opacity: 0.8;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`
export const ShareIcon = styled(ShareSVG)`
  fill: ${theme('thread.articleDigest')};
  ${icon};
`
export const CollectIcon = styled(CollectSVG)`
  fill: ${theme('thread.articleDigest')};
  ${icon};
`
