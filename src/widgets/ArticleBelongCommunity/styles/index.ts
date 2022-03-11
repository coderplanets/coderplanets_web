import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'
import SiteLogo from '@/icons/CPLogo'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')};
  position: relative;
`
export const HomeLogo = styled(SiteLogo)`
  ${css.size(32)};
  fill: #007fa8;
`
export const Icon = styled(Img)`
  ${css.size(32)};
  fill: ${theme('thread.articleDigest')};
`
export const Name = styled.a`
  text-decoration: none;
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 2px;

  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const JoinDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 1px;
  margin-bottom: 10px;
`
