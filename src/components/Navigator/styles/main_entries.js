import styled from 'styled-components'

import { theme, cs } from '@utils'
import DotDividerBase from '@components/DotDivider'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};

  margin-left: 10px;
  font-size: 0.9rem;
  ${cs.media.tablet`display: none`};
`
export const DotDivider = styled(DotDividerBase)`
  background-color: ${theme('banner.desc')};
`
export const SiteLink = styled.a.attrs(props => ({
  'data-testid': props.testid,
}))`
  color: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  background: ${({ active }) =>
    active ? theme('banner.numberHoverBg') : 'transparent'};
  padding: 5px 3px 3px 3px;
  border-bottom: ${({ active }) => (active ? '2px solid' : 'none')};
  border-bottom-color: ${({ active }) =>
    active ? theme('tabs.headerActive') : ''};

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${theme('banner.title')};
    border-bottom: 2px solid;
    border-bottom-color: theme('tabs.headerActive');
    padding: 5px 3px 3px 3px;
  }
`
