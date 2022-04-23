import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import LinkSVG from '@/icons/InternalLink'

export const LinkIcon = styled(LinkSVG)`
  ${css.size(12)};
  fill: #119396;
  margin-left: 3px;
`
export const Source = styled.a`
  color: ${theme('link')};
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: ${theme('linkHover')};
    text-decoration: underline;
  }
`
