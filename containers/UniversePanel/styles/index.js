import styled, { keyframes } from 'styled-components'

import Img from '../../../components/Img'

import searchIcon from '../../../static/search.svg'
import loadingIcon from '../../../static/searchLoading.svg'

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

export const SearchIcon = styled(searchIcon)`
  fill: ${props => props.theme.u_panel.search_icon};
  width: 30px;
  height: 30px;
  margin-top: 20px;
`

export const LoadingIcon = styled(loadingIcon)`
  fill: ${props => props.theme.u_panel.search_icon};
  width: 30px;
  height: 30px;
  margin-top: 20px;
  animation: ${rotate360} 2s linear infinite;
`

export const AddOn = styled.div`
  margin-left: 15px;
  width: 25px;
`

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

// #001b21;
export const BaseBar = styled.div`
  box-shadow: 0 12px 48px 0 rgba(0, 0, 0, 0.4);
  border: 1px solid ${props => props.theme.u_panel.border};
  width: 50vw;
  max-width: 600px;
  height: 70px;
  background: ${props => props.theme.u_panel.bar_bg};
  color: white;
  display: flex;
  flex-direction: row;
`
export const EditorBar = styled(BaseBar)`
  position: relative;
  left: -50%;
`
export const AlertBar = styled(BaseBar)`
  position: relative;
  padding: 18px;
  left: -50%;
  color: #365760;
  &:before {
    content: '⚠ ';
    margin-right: 10px;
    color: tomato;
  }
`

export const InfoBar = styled(BaseBar)`
  padding: 10px;
  min-height: 100px;
`
export const InputBar = styled.input`
  caret-color: ${props => props.theme.u_panel.search_input};
  flex-grow: 1;
  font-family: '.SFNSText-Light', 'SF UI Text', 'Helvetica Neue', 'Arial',
    'Lucida Grande', 'Segoe UI', Noto Sans, sans-serif;
  height: 100%;
  width: auto;
  outline: none;
  font-weight: 200;
  color: ${props => props.theme.u_panel.search_input};
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
export const Title = styled.div`
  display: block;
  > a {
    color: ${props => props.theme.u_panel.link};
  }
`
export const Desc = styled.div`
  color: ${props => props.theme.u_panel.text};
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
  color: ${props => props.theme.u_panel.text};
  font-style: italic;
`

export const RepoStar = styled.div`
  color: ${props => props.theme.u_panel.text};
  font-style: italic;
  margin-right: 10px;
`
