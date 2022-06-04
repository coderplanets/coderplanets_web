import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const BaseSection = styled.section`
  /* margin: 0 50px; */
  padding-bottom: 30px;
  margin-bottom: 20px;
  /* border-bottom: 1px solid;
  border-bottom-color: ${theme('border')}; */
`
export const TitleBase = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  margin-bottom: 12px;
`
