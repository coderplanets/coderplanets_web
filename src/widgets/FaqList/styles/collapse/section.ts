import styled from 'styled-components'

import type { TActive } from '@/spec'

import css, { theme } from '@/utils/css'
import ArrowSVG from '@/icons/ArrowSimple'

export const Wrapper = styled.div`
  padding: 18px 0;
  width: 100%;
`
export const Header = styled.div`
  ${css.flex('align-center', 'justify-between')};
  cursor: pointer;
`
export const Title = styled.div<TActive>`
  ${css.cutRest('440px')};
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 16px;
  font-weight: 500;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
`
export const ArrowIcon = styled(ArrowSVG)<TActive>`
  ${css.size(16)};
  fill: ${theme('thread.extraInfo')};
  margin-left: 20px;
  margin-right: 10px;
  transform: ${({ $active }) => ($active ? 'rotate(270deg)' : 'rotate(90deg)')};

  transition: all 0.5s;
`

export const Body = styled.div<TActive>`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-top: ${({ show }) => (show ? '12px' : 0)};
  max-height: ${({ show }) => (show ? 'auto' : 0)};
  line-height: 1.8;
  overflow: hidden;

  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.3s;
`
