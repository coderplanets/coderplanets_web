import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flex('align-both')}
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-left: 10px;
  margin-right: 10px;
`
export const PrefixIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};

  transform: ${({ reverse }) => (reverse ? 'rotateY(180deg)' : '')};
`
