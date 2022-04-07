import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import css, { theme } from '@/utils/css'
import DotDividerBase from '@/widgets/DotDivider'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  font-size: 15px;
  width: 100%;

  ${css.media.mobile`
    margin-left: 2px;
  `};
`
export const DotDivider = styled(DotDividerBase)`
  background-color: transparent;
`
type TSiteLink = TTestable & TActive
export const SiteLink = styled.a.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TSiteLink>`
  ${css.flex('align-center')};
  color: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  background: ${({ active }) => (active ? '#0d4354' : 'transparent')};
  padding: ${({ active }) => (active ? '5px 6px' : '6px 3px 3px 3px')};
  border-top: ${({ active }) => (active ? '2px solid' : 'none')};
  border-top-color: ${({ active }) =>
    active ? theme('tabs.headerActive') : ''};

  /* font-weight: ${({ active }) => (active ? 'bold' : 'normal')}; */
  font-weight: 600;

  height: 33px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${theme('banner.title')};
    border-top: ${({ active }) => (active ? '2px solid' : 'none')};
    border-top-color: theme('tabs.headerActive');
    padding: ${({ active }) => (active ? '5px 6px' : '6px 3px 3px 3px')};
  }
`
