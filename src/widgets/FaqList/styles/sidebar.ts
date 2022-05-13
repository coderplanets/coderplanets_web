import styled from 'styled-components'

import type { TTestable } from '@/spec'

import css, { theme } from '@/utils/css'
import FAQSVG from '@/icons/FAQ'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 320px;
  min-width: 320px;
  color: ${theme('thread.articleDigest')};
  padding-top: 25px;
  padding-left: 50px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-top: -2px;
  margin-bottom: 16px;
`
export const FAQIcon = styled(FAQSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 10px;
  opacity: 0.8;
  margin-top: 2px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  font-size: 15px;
`
export const Section = styled.div`
  ${css.lineClamp(2)}
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
  font-weight: 400;
  margin-bottom: 14px;

  &:hover {
    font-weight: 500;
    cursor: pointer;
  }
  transition: all 0.2s;
`
export const Footer = styled.div`
  ${css.flex('align-center')};
  margin-top: 15px;
  border-top: 1px solid;
  border-top-color: ${theme('border')};
  padding-top: 20px;
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const MoreLink = styled.div`
  color: ${theme('link')};
  margin-left: 1px;

  &:hover {
    cursor: pointer;
  }

  transition: all 0.2s;
`
