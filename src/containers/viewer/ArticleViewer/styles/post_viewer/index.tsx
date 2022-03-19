import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  padding: 0 8px;
`
export const BodyWrapper = styled.div`
  padding: 20px 0;
  min-height: 300px;
  margin-top: 5px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 25px;
`
export const SubTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  opacity: 0.4;
  font-size: 18px;
  margin-left: 10px;
`
