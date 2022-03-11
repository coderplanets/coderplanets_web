import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')}
  color: ${theme('thread.articleDigest')};
  width: 100%;
  margin-top: -15%;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
`
export const Body = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 30px;
  margin-bottom: 50px;
  width: 500px;
  font-size: 16px;
  line-height: 1.8;
`

// text-indent conflict with display: inline-flex
export const Indent = styled.span`
  padding-left: 30px;
`
