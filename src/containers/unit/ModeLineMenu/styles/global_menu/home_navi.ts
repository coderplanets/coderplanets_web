import styled from 'styled-components'

import { TTestable } from '@/spec'
import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  width: 100%;
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(16)};
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
  ${css.size(14)};
  transform: rotate(180deg);
  margin-left: 5px;
  &:active {
    fill: #0d969e;
  }
`
