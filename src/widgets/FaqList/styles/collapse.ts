import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import FAQSVG from '@/icons/FAQ'
import ArrowSVG from '@/icons/ArrowSimple'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-left: 15px;
`
export const Header = styled.div`
  margin-bottom: 34px;
  margin-left: -25px;
`
export const FAQ = styled.div`
  ${css.flex('align-both')};
`
export const FAQIcon = styled(FAQSVG)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 10px;
  margin-top: 2px;
`
export const FAQTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  font-weight: 500;
`
export const FAQDesc = styled.div`
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
  ${css.flex('align-center', 'justify-between')};
  padding: 20px 0;
`
export const ArrowIcon = styled(ArrowSVG)`
  ${css.size(16)};
  fill: ${theme('thread.extraInfo')};
  margin-left: 20px;
  margin-right: 10px;

  transform: rotate(270deg);
`
export const Title = styled.div`
  ${css.cutRest('440px')};
  /* ${css.lineClamp(1)} */
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
