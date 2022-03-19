import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('justify-center')}
`
export const PopoverInfo = styled.div`
  ${css.flexColumn()};
  padding: 10px;
  padding-bottom: 5px;
  width: 200px;
`
export const PopTitle = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const PopDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
  margin-top: 4px;
`
