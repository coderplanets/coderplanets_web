import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import DotDivider from '@/widgets/DotDivider'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Topping = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 4px;
`
export const Main = styled.div`
  ${css.flexGrow('align-center')};
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.div`
  position: relative;
  font-size: 15px;
  font-weight: 600;
  color: ${theme('thread.articleTitle')};

  @media (max-width: 1450px) {
    ${css.cutRest('500px')};
  }
  @media (max-width: 1250px) {
    ${css.cutRest('450px')};
  }
  @media (max-width: 1100px) {
    ${css.cutRest('350px')};
  }

  &:hover {
    color: ${theme('thread.articleDigest')};
    cursor: pointer;
  }

  transition: color 0.2s;
`
export const TitlePopInfo = styled.div`
  padding: 4px 8px;
`
export const TitleLink = styled.div`
  position: relative;
  font-size: 15px;
  margin-top: -1px;
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
  text-decoration: underline;
`

export const AuthorName = styled.a`
  display: block;
  color: ${theme('thread.extraInfo')};
  font-size: 13px;

  text-decoration: none;

  &:hover {
    color: ${theme('thread.extraInfo')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const PublishTime = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 11px;
`
export const Dot = styled(DotDivider)`
  background-color: ${theme('thread.articleDigest')};
  margin-right: 8px;
`
