import styled from 'styled-components'

import type { TTestable } from '@/spec'

import css, { theme } from '@/utils/css'
import FAQSVG from '@/icons/FAQ'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 100%;
  min-width: 320px;
  color: ${theme('thread.articleDigest')};
  padding-top: 25px;
  padding-left: 5px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 20px;
`
export const FAQIcon = styled(FAQSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 10px;
  opacity: 0.8;
  margin-top: 2px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Body = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
`
export const Section = styled.div`
  width: 48%;
  ${css.lineClamp(1)}

  margin-bottom: 14px;
`

export const Item = styled.span`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`

export const Footer = styled.div`
  ${css.flex('align-center')};
  margin-top: 15px;
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
