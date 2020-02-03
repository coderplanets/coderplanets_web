import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

const BaseCard = styled.div`
  ${cs.flexColumn('align-center')};

  position: relative;
  padding-top: 12px;
  padding: 10px;
  padding-bottom: 0;
  width: 200px;
  height: 250px;
  margin-right: 30px;
  background: ${theme('content.cardBg')};
  border: 1px solid;
  border-color: ${theme('content.cardBorder')};
  border-radius: 3px;
`
export const Wrapper = styled(BaseCard)`
  margin-bottom: 60px;

  &:hover {
    border: 1px solid;
    border-color: ${theme('content.cardBorderHover')};
    box-shadow: 0px 7px 20px 10px rgba(0, 0, 0, 0.15);
  }
  transition: all 0.25s;
`

// fill only works for non-colored svgs
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
export const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
  color: ${theme('thread.articleTitle')};

  ${Wrapper}:hover & {
    color: ${theme('banner.title')};
  }
`
export const Desc = styled.div`
  font-size: 1em;
  text-align: center;
  min-height: 50px;
  color: ${theme('banner.desc')};
`
export const ActivitySpark = styled.div`
  width: 100%;
  height: 100%;
`
export const Footer = styled.div`
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
