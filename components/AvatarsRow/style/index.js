import styled from 'styled-components'

export const Avatars = styled.ul`
  display: flex;
  list-style-type: none;
  margin: auto;
  height: 32px;
  padding: 0px 7px 0px 0px;
  flex-direction: row-reverse;
`

export const AvatarsItem = styled.li`
  height: 49px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: 25px;
`

export const AvatarsImg = styled.img`
  border: 3px solid #f9fcfc;
  border-radius: 100px 100px 100px 100px;
  color: #ffffff;
  display: block;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 100;
  height: 33px;
  width: 33px;

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
  height: 33px;
  width: 33px;
  padding-top: 7px;
  padding-left: 2px;
  text-align: center;
`
