import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('align-start', 'justify-start')};
  width: 100%;
  min-height: 300px;
  color: ${theme('thread.articleDigest')};
  padding: 20px 0;
  margin-top: 20px;
`
export const Header = styled.div`
  ${css.flex('align-both', 'justify-between')};
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid;
  border-bottom-color: #03343f;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const Section = styled.section`
  width: 100%;
  margin-bottom: 25px;
`
export const Footer = styled.div`
  ${css.flex('align-both')};
  width: 100%;
  border-top: 2px solid;
  border-top-color: #03343f;
  margin-top: 35px;
  padding-top: 20px;
`
