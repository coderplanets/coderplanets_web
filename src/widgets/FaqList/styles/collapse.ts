import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import FAQSVG from '@/icons/FAQ'
import ArrowSVG from '@/icons/ArrowSolid'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Header = styled.div`
  margin-bottom: 20px;
`
export const FAQ = styled.div`
  ${css.flex('align-center')};
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
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  padding-top: 5px;
  font-size: 12px;
  margin-top: 35px;
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
  ${css.flex('align-center')};
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('border')};
`
export const ArrowIcon = styled(ArrowSVG)`
  ${css.size(12)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 10px;
`
export const Title = styled.div`
  ${css.lineClamp(1)}
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
