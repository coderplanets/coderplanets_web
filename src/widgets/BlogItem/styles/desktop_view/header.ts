import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import LinkSVG from '@/icons/Link'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const Brief = styled.div`
  ${css.flexGrow('align-start')};
  margin-bottom: 10px;
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.a`
  ${css.lineClamp(2)}
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  text-decoration: none;

  max-width: 380px;
  word-break: break-all;

  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    text-decoration-color: ${theme('thread.articleDigest')};
    cursor: pointer;
  }

  transition: color 0.1s;
`
export const AddonInfo = styled.div`
  ${css.flex('align-center')};
  margin-top: 4px;
`
export const TitleLink = styled.a`
  ${css.flex('align-center')};
  position: relative;
  font-size: 12px;
  color: ${theme('thread.articleLink')};
  opacity: 0.8;
  text-decoration: none;

  &:hover {
    color: ${theme('thread.articleLink')};
    opacity: 1;
    text-decoration: underline;
  }
`
export const LinkIcon = styled(LinkSVG)`
  fill: ${theme('thread.articleLink')};
  margin-left: 8px;
  ${css.size(14)};
`
export const TagListWrapper = styled.div``
