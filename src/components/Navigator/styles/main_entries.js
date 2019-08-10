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
  color: ${theme('banner.desc')};
  background: ${({ active }) =>
    active ? theme('banner.numberHoverBg') : 'transparent'};
  padding: ${({ active }) => (active ? '5px 3px 3px 3px' : '0')};
  border-bottom: ${({ active }) => (active ? '2px solid' : 'none')};
  border-bottom-color: ${({ active }) =>
    active ? theme('tabs.headerActive') : ''};

  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`
