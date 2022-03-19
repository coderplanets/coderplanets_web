import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
`
export const Info = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Number = styled.span`
  color: ${theme('banner.title')};
  margin-left: 4px;
  margin-right: 4px;
  font-weight: bold;
`
