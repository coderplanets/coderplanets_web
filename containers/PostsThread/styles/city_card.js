import styled from 'styled-components'

import Img from 'components/Img'
import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};

  position: relative;
  padding-top: 12px;
  padding: 10px;
  padding-bottom: 0;
  width: 210px;
  height: 220px;
  margin-right: 20px;
  background: ${theme('content.cardBg')};
  border: 1px solid;
  border-color: ${theme('content.cardBorder')};
  border-radius: 3px;
  margin-bottom: 50px;

  &:hover {
    border: 1px solid;
    border-color: ${theme('content.cardBorderHover')};
    cursor: pointer;
  }
  ${cs.media.mobile`
    width: 140px;
    height: 200px;
    margin-right: 8px;
  `};
`

export const CommunityIcon = styled(Img)`
  display: block;
  fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.desc'))};
  width: 54px;
  height: 54px;
  margin-bottom: 8px;
  margin-top: -35px;
  ${Wrapper}:hover & {
    fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.title'))};
  }
`

export const CardTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
  color: ${theme('thread.articleTitle')};

  ${Wrapper}:hover & {
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
  width: 60%;
`

export const CardFooter = styled.div`
  ${cs.flex('justify-around')};

  width: 100%;
  position: absolute;
  bottom: 16px;
  color: ${theme('banner.desc')};
`

export const Divider = styled.div`
  width: 90%;
  margin-top: 12px;
  border-top: 1px solid;
  border-top-color: ${theme('content.cardBorder')};
  margin-bottom: 5px;
`
