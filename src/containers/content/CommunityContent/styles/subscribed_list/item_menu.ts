import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  padding: 8px;
  padding-bottom: 2px;
`
export const Item = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  cursor: pointer;
`
export const Icon = styled(Img)`
  ${css.size(14)};
  fill: ${theme('thread.articleDigest')};

  ${Item}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
export const Title = styled.div`
  font-size: 13px;
  fill: ${theme('thread.articleDigest')};
  margin-left: 5px;

  ${Item}:hover & {
    color: ${theme('thread.articleTitle')};
  }
`
