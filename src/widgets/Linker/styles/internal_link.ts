import styled from 'styled-components'

import css from '@/utils/css'

import LinkSVG from '@/icons/InternalLink'

export const LinkIcon = styled(LinkSVG)`
  ${css.size(12)};
  fill: #119396;
  margin-left: 3px;
`
export const Source = styled.a`
  color: #119396;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #119396;
    text-decoration: underline;
  }
`
