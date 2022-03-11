import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumnGrow()};
  color: ${theme('thread.articleDigest')};
  max-width: 60%;
  margin-top: 100px;
`
export const Title = styled.h2`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 15px;
`
export const P = styled.p`
  line-height: 1.8;
  font-size: 15px;
`
export const Ul = styled.ul`
  width: 375px;
  margin-left: 18px;
  list-style: disc;
  color: ${theme('thread.articleDigest')};
`
export const Li = styled.li`
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 14px;
`
export const Strike = styled.span`
  text-decoration: line-through;
  margin-left: 1px;
  margin-right: 1px;
`
export const Bold = styled.span`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`
