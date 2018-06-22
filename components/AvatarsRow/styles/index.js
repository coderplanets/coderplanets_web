import styled from 'styled-components'

import { theme, Animate } from '../../../utils'

export const Avatars = styled.ul`
  display: flex;
  list-style-type: none;
  margin: auto;
  height: ${props => props.height};
  padding: 0px 8px 0px 0px;
  flex-direction: row-reverse;
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
    animation: ${Animate.pulse} 0.3s linear;
  }
`

export const AvatarsImg = styled.img`
  border: 2px solid;
  border-color: ${theme('thread.comments_user_border')};
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

export const AvatarsMore = styled.span`
  background-color: #e6edf3;
  font-size: 11px;
  border: 2px solid #f9fcfc;
  border-radius: 100px 100px 100px 100px;
  color: grey;
  display: block;
  font-family: sans-serif;
  font-weight: 100;
  height: 30px;
  width: 30px;
  padding-top: 7px;
  padding-left: 2px;
  text-align: center;
`
