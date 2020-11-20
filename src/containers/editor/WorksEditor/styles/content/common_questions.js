import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
  width: auto;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-right: 6px;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: color 0.2s;
`
export const Icon = styled(Img)`
  ${css.size(14)};
  fill: ${theme('thread.articleDigest')};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transform: rotate(-90deg);
  transition: fill 0.2s;
`
