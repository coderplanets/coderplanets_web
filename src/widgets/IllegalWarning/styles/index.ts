import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  color: ${theme('thread.articleDigest')};
  width: 280px;
  border: 1px solid;
  border-top: 3px solid;
  border-radius: 5px;
  border-color: ${theme('baseColor.red')};
  min-height: 100px;
  padding: 10px 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 12px;
`
export const Reason = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const Content = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
`
export const IllegalItem = styled.div`
  color: ${theme('thread.articleTitle')};
  background: #4c312c;
  font-size: 12px;
  padding: 2px 5px;
  margin-right: 10px;
  margin-left: -2px;
  border-radius: 5px;
  margin-bottom: 6px;
`
