import styled from 'styled-components'

import { theme, cs } from 'utils'

export const Wrapper = styled.article`
  ${cs.flex()};
  padding: 20px;
  min-height: 300px;
  ${cs.media.tablet`
    padding: 8px 0;
  `};
`
export const MainWrapper = styled.div`
  width: 68%;
  margin-left: 2.5rem;
  ${cs.media.tablet`
    width: 100%;
    margin-left: 0;
  `};
`
/* background: ${theme('preview.articleBg')}; */
export const ArticleWrapper = styled.div`
  font-size: 1.1rem;
  margin-left: 2vw;
  margin-right: 1.6vw;
  background: ${theme('preview.articleBg')};
  border-radius: 5px;
  padding: 35px 40px;
  min-height: 60vh;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

  ${cs.media.tablet`
    padding: 30px 20px;
    min-height: 40vh;
  `};
`
export const BodyHeaderWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 18px;
`
export const CommentsWrapper = styled.div`
  margin-top: 30px;
  margin: 25px;
  ${cs.media.tablet`
margin: 10px;
`};
`

export const MobileWrapper = styled.div`
  margin-top: 10px;
  ${cs.flexColumn('align-center')};
  display: none;
  ${cs.media.tablet`
${cs.flex()};
  `};
`
export const MobileContentCard = styled.div`
  ${cs.flex('justify-center')};
  width: 100%;
`
