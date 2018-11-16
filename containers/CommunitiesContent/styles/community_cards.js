import styled from 'styled-components'

import { theme, cs } from '../../../utils'
import Img from '../../../components/Img'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const CardsWrapper = styled.div`
  ${cs.flex('justify-center')};
  flex-wrap: wrap;
`
export const CommunityIcon = styled(Img)`
  width: 60px;
  height: 60px;
  margin-top: -40px;
`
export const Card = styled.div`
  ${cs.flexColumn('align-center')};

  position: relative;
  padding-top: 12px;
  padding: 10px;
  padding-bottom: 0;
  width: 250px;
  height: 250px;
  margin-right: 30px;
  background: ${theme('content.cardBg')};
  border: 1px solid;
  border-color: ${theme('content.cardBorder')};
  &:hover {
    border: 1px solid;
    border-color: ${theme('content.cardBorderHover')};
  }
  border-radius: 3px;
  margin-bottom: 60px;
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
