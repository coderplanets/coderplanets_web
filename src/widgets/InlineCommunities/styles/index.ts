import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div``
export const Title = styled.div``

export const MoreText = styled.div``

export const PopoverInfo = styled.div`
  color: ${theme('thread.articleDigest')};
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`
export const Linker = styled.a`
  color: ${theme('thread.articleTitle')};
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }
`
export const CommunityWrapper = styled.div`
  margin-right: 3px;
`
export const CommunityLogo = styled(Img)`
  ${css.size(16)};
`
