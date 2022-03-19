import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
import SiteLogo from '@/icons/CPLogo'
import ArrowSVG from '@/icons/ArrowSimple'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-both')};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Logo = styled(SiteLogo)`
  fill: ${theme('button.primary')};
  ${css.size(15)};
  margin-top: -2px;
`
export const Block = styled.div`
  ${css.flex('align-center')};
  margin-left: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  font-weight: bold;
`
export const ArrowIcon = styled(ArrowSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  transform: rotate(180deg);
  margin-left: 5px;
  &:active {
    fill: #0d969e;
  }
`
