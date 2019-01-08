import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.ul`
  ${cs.flex()};
  flex-direction: row-reverse;
  list-style-type: none;
  margin: auto;
  height: ${({ height }) => height};
  padding: 0px 8px 0px 0px;
`
// height: 49px;
export const AvatarsItem = styled.li`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: 25px;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  ${Wrapper}:hover & {
    margin-left: 5px;
  }
  transition: all 0.3s;
`
export const AvatarsImg = styled.img`
  border: 2px solid;
  border-color: ${theme('thread.commentsUserBorder')};
  border-radius: 100px 100px 100px 100px;
  color: #ffffff;
  display: block;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 100;
  height: 30px;
  width: 30px;

  text-align: center;
`

const moreTextSize = total => {
  if (total < 99) return '14px'
  if (total >= 100 && total <= 999) return '12px'
  return '10px'
}

export const AvatarsMore = styled.span`
  ${cs.flex('align-center')};
  justify-content: center;
  font-size: ${({ total }) => moreTextSize(total)};

  border-color: ${theme('thread.articleHover')};
  color: ${theme('thread.articleTitle')};
  background-color: ${theme('thread.articleHover')};
  border-radius: 100px 100px 100px 100px;
  font-family: sans-serif;
  font-weight: ${({ total }) => (total >= 1000 ? 600 : 200)};
  height: 30px;
  width: 30px;
  padding-left: ${({ total }) => (total >= 1000 ? '5px' : '3px')};
`
