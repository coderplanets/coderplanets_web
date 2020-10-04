import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'
import DotDividerBase from '@/components/DotDivider'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};

  margin-left: ${({ type }) => (type === 'brief' ? '5px' : '10px')};
  font-size: 14.5px;

  ${cs.media.mobile`
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
  ${cs.flex('align-center')};
  color: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  background: ${({ active }) =>
    active ? theme('banner.numberHoverBg') : 'transparent'};
  padding: 5px 3px 3px 3px;
  border-bottom: ${({ active }) => (active ? '2px solid' : 'none')};
  border-bottom-color: ${({ active }) =>
    active ? theme('tabs.headerActive') : ''};

  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${theme('banner.title')};
    border-bottom: 2px solid;
    border-bottom-color: theme('tabs.headerActive');
    padding: 5px 3px 3px 3px;
  }
`
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-left: 5px;
  width: 10px;
  height: 10px;
  display: block;
`
export const MobileIcon = styled(Icon)`
  margin-left: 5px;
  width: 14px;
  height: 14px;
`
