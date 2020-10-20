import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
  width: 100%;
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 16px;
  height: 16px;
  display: block;
  margin-top: -2px;
`
export const Block = styled.div`
  ${css.flex('align-center')};
  margin-left: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-top: -2px;
  font-weight: bold;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 14px;
  height: 14px;
  display: block;
  transform: rotate(180deg);
  margin-left: 5px;
  &:active {
    fill: #0d969e;
  }
`
