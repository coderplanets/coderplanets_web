import styled from 'styled-components'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const Section = styled.div`
  ${css.flexColumn('align-start')};
  width: 65px;
`
export const Title = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const Number = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
