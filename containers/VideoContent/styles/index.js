import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.article`
  ${cs.flex()};
  padding: 20px;
  min-height: 300px;
`
export const MainWrapper = styled.div`
  width: 68%;
  margin-left: 2.5rem;
`
// padding: 35px 40px;

export const ArticleWrapper = styled.div`
  font-size: 1.1rem;
  margin-left: 2vw;
  margin-right: 1.6vw;
  background: ${theme('preview.articleBg')};
  border-radius: 5px;
  padding-top: 30px;
  min-height: 40vh;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`
export const BodyHeaderWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 5px;
  padding-left: 20px;
`

export const CommentsWrapper = styled.div`
  margin-top: 30px;
  margin: 25px;
`
