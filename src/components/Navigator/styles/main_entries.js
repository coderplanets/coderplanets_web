import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'
import DotDividerBase from '@/components/DotDivider'

export const Wrapper = styled.div`
  ${css.flex('align-center')};

  margin-left: ${({ type }) => (type === 'brief' ? '5px' : '10px')};
  font-size: 14.5px;

  ${css.media.mobile`
    margin-left: 2px;
  `};
`
export const DotDivider = styled(DotDividerBase)`
  background-color: ${theme('banner.desc')};
  width: 4px;
  height: 4px;
`
export const SiteLink = styled.a.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
  color: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  background: ${({ active }) => (active ? '#0d4354' : 'transparent')};
  padding: ${({ active }) => (active ? '5px 6px' : '6px 3px 3px 3px')};
  border-top: ${({ active }) => (active ? '2px solid' : 'none')};
  border-top-color: ${({ active }) =>
    active ? theme('tabs.headerActive') : ''};

  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

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
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-left: 5px;
  ${css.size(10)};
`
export const MobileIcon = styled(Icon)`
  margin-left: 5px;
  ${css.size(14)};
`
