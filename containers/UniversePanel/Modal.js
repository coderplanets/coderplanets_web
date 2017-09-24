import styled from 'styled-components'

import Img from '../../components/Img'

// center css see: https://stackoverflow.com/questions/1776915/how-to-center-absolutely-positioned-element-in-div
// flex-grow example: http://zhoon.github.io/css3/2014/08/23/flex.html
export const PanelContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 50%;
`

export const Wraper = styled.div`
  position: relative;
  left: -50%;
  display: flex;
  flex-direction: column;
  height: 65vh;
  overflow: scroll;
`

export const BaseBar = styled.div`
  border: 1px solid white;
  box-shadow: 0 12px 48px 0 rgba(0, 0, 0, 0.4);
  border: 1px solid #014354;
  width: 50vw;
  max-width: 600px;
  height: 70px;
  background: #001b21;
  color: white;
  display: flex;
  flex-direction: row;
`
export const EditorBar = styled(BaseBar)`
  position: relative;
  left: -50%;
`
export const InfoBar = styled(BaseBar)`
  padding: 10px;
  min-height: 100px;
`

export const AddOn = styled.div`
  transform: rotate(-45deg);
  font-size: 5vh;
  margin-left: 15px;
  color: #365760;
  margin-top: 5px;
  margin-top: 3px;
  width: 20px;
`

export const InputBar = styled.input`
  caret-color: #365760; /*cursor color*/
  flex-grow: 1;
  font-family: '.SFNSText-Light', 'SF UI Text', 'Helvetica Neue', 'Arial',
    'Lucida Grande', 'Segoe UI', Noto Sans, sans-serif;
  height: 100%;
  width: auto;
  outline: none;
  font-weight: 200;
  color: #365760;
  font-size: 24px;
  line-height: 70px;
  max-height: none;
  background-color: transparent;
  padding: 0 20px 0px 20px;
  border: 0;
  border-radius: 0;
  transition: all 400ms ease;
`

export const AvatarWrapper = styled.div`
  width: 10%;
  margin-right: 10px;
`

export const AvatarImg = styled(Img)`
  width: 100%;
  border-radius: 50%;
`
export const ContentWraper = styled.div`
  color: tomato;
  text-align: left;
  flex-grow: 1;
`
export const Title = styled.div`color: white;`
export const Desc = styled.div`
  color: #4c7c8a;
  text-overflow: ellipsis;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 7px;
`

export const SubInfoWraper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const RepoLang = styled.div`
  color: #4c7c8a;
  font-style: italic;
`

export const RepoStar = styled.div`
  color: #4c7c8a;
  font-style: italic;
  margin-right: 10px;
`

/*
  text-overflow: ellipsis;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
*/
