import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
`
export const CardsWrapper = styled.div`
  ${cs.flex('justify-center')};
  flex-wrap: wrap;
`
const BaseCard = styled.div`
  ${cs.flexColumn('align-center')};

  position: relative;
  padding-top: 12px;
  padding: 10px;
  padding-bottom: 0;
  width: 230px;
  height: 250px;
  margin-right: 30px;
  background: ${theme('content.cardBg')};
  border: 1px solid;
  border-color: ${theme('content.cardBorder')};
  border-radius: 3px;
`
export const Card = styled(BaseCard)`
  margin-bottom: 60px;

  &:hover {
    border: 1px solid;
    border-color: ${theme('content.cardBorderHover')};
    border-top: 2px solid;
    border-top-color: ${theme('content.cardBorderHover')};
    margin-top: -8px;
  }
  transition: margin 0.2s;
`

export const EmptyCard = styled(BaseCard)`
  width: 500px;
  margin-left: 20px;
`
export const EmptyTitle = styled.div`
  margin-top: 30px;
  color: ${theme('thread.articleTitle')};
  font-size: 1.2rem;
`
export const EmptyDesc = styled.div`
  margin-top: 30px;
  color: ${theme('thread.articleDigest')};
  font-size: 1rem;
`
export const SearchValueFocus = styled.span`
  color: ${theme('banner.title')};
  &:before {
    content: '"';
  }

  &:after {
    content: '"';
  }
`
export const IssueLink = styled.a`
  color: ${theme('banner.title')};
  margin-left: 3px;
  margin-right: 3px;

  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${theme('banner.title')};
    text-decoration: underline;
  }
`

// fill only works for non-colored svgs
export const CommunityIcon = styled(Img)`
  display: block;
  fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.desc'))};
  width: 54px;
  height: 54px;
  margin-bottom: 8px;
  margin-top: -35px;
  ${Card}:hover & {
    fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.title'))};
  }
`
export const CardTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
  color: ${theme('thread.articleTitle')};

  ${Card}:hover & {
    color: ${theme('banner.title')};
  }
`
export const CardDesc = styled.div`
  font-size: 1em;
  text-align: center;
  min-height: 50px;
  color: ${theme('banner.desc')};
`
export const ActivitySpark = styled.div`
  width: 100%;
  height: 100%;
`

export const CardFooter = styled.div`
  ${cs.flex('justify-around')};

  width: 90%;
  position: absolute;
  bottom: 16px;
  color: ${theme('banner.desc')};
  border-top: 1px solid;
  border-top-color: ${theme('content.cardBorder')};
  padding-top: 15px;
`

export const Divider = styled.div`
  width: 90%;
  margin-top: 12px;
  border-top: 1px solid;
  border-top-color: ${theme('content.cardBorder')};
  margin-bottom: 5px;
`
