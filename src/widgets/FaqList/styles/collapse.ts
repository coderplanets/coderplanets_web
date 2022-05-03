import styled from 'styled-components'

import type { TActive } from '@/spec'

import css, { theme } from '@/utils/css'
import FAQSVG from '@/icons/FAQ'
import ArrowSVG from '@/icons/ArrowSimple'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 55%;
  max-width: 55%;
  min-width: 550px;
  max-width: 550px;
`
export const FAQ = styled.div`
  ${css.flex('align-both')};
  margin-bottom: 34px;
  margin-left: -40px;
`
export const FAQIcon = styled(FAQSVG)`
  ${css.size(18)};
  fill: ${theme('thread.articleDigest')};
  margin-top: 2px;
`
export const FAQTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  font-weight: 500;
`
export const Footer = styled.div`
  ${css.flex('align-both')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 60px;
  margin-left: -50px;
`
export const MoreLink = styled.div`
  color: ${theme('link')};
  margin-left: 1px;

  &:hover {
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const Section = styled.div`
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

  ${Section}:hover & {
    color: ${theme('thread.articleTitle')};
  }
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
export const ArrowIcon = styled(ArrowSVG)<TActive>`
  ${css.size(16)};
  fill: ${theme('thread.extraInfo')};
  margin-left: 20px;
  margin-right: 10px;
  transform: ${({ $active }) => ($active ? 'rotate(270deg)' : 'rotate(90deg)')};

  transition: all 0.5s;
`
