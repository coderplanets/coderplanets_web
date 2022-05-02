import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import css, { theme } from '@/utils/css'
import DotDividerBase from '@/widgets/DotDivider'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  font-size: 15px;
  width: 100%;
`
export const DotDivider = styled(DotDividerBase)`
  background-color: transparent;
`
type TSiteLink = TTestable & TActive
export const SiteLink = styled.a.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TSiteLink>`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-weight: ${({ active }) => (active ? 600 : 400)};

  height: 33px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    color: ${theme('thread.extraInfo')};
  }
`
