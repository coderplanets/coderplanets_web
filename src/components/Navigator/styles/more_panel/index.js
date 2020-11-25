import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: ${({ mobile }) => (!mobile ? '455px' : '100%')};
  min-height: 300px;
  margin-top: 0;
`
export const BodyWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-top: 25px;
`
export const Entry = styled.div`
  ${css.flexColumn('align-start')};
  width: ${({ mobile }) => (!mobile ? '225px' : '48%')};
  height: 75px;
  padding-left: 15px;
  text-decoration: none;

  ${css.media.mobile`
    height: 88px;
  `};
`
export const Main = styled.a`
  ${css.flex('align-start')};
  text-decoration: none;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  margin-left: ${({ offset }) => offset || '10px'};

  &:hover {
    color: #2d7eb1; /* primaryColor */
    text-decoration: underline;
    text-decoration-color: #2d7eb1;
    cursor: pointer;
  }
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(18)};
  margin-top: 4px;

  ${Main}:hover & {
    fill: #2d7eb1; /* primaryColor */
    cursor: pointer;
  }
`
export const SubscribeLogo = styled(Logo)`
  ${css.size(24)};
  margin-top: 0;
  margin-left: -2px;
`
export const ChartLogo = styled(Logo)`
  ${css.size(22)};
  margin-top: 2px;
  margin-left: -2px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 5px;
  margin-left: 28px;
`
export const Wip = styled.div`
  color: #007372;
  border: 1px solid;
  border-color: #007372;
  margin-left: 10px;
  font-size: 10px;
  padding: 0 2px;
  border-radius: 4px;
`
