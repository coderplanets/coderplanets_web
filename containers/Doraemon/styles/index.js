import styled, { keyframes } from 'styled-components'
import { theme } from '../../../utils/themes'

import { Img } from '../../../components'

import loadingIcon from '../../../static/searchLoading.svg'

// import javascriptIcon from '../../../static/nodeIcons/javascript.svg'

// import * as SuggestionIcons from './suggestionIcons'
export * from './suggestionIcons'

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

export const LoadingIcon = styled(loadingIcon)`
  fill: ${theme('u_panel.search_icon')};
  width: 30px;
  height: 30px;
  margin-top: 20px;
  animation: ${rotate360} 2s linear infinite;
`

export const AddOn = styled.div`
  margin-left: 15px;
  width: 25px;
`

export const PageOverlay = styled.div`
  //  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  cursor: pointer;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1001;
  display: ${props => (props.visible ? 'block' : 'none')};
`
// flex-grow example: http://zhoon.github.io/css3/2014/08/23/flex.html
export const PanelContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  width: 45vw;
  max-width: 550px;
  position: absolute;
  top: 12vh;
  z-index: 1002;
  display: ${props => (props.visible ? 'block' : 'none')};
  left: 50%;
  margin-left: -19vw;
`
export const Wraper = styled.div`
  position: relative;
  display: ${props => (props.empty ? 'none' : 'flex')};
  flex-direction: column;
  max-height: 60vh;
  overflow: scroll;
`

// #001b21;
export const BaseBar = styled.div`
  border: 1px solid ${theme('u_panel.border')};
  width: 100%;
  height: 70px;
  background: ${theme('u_panel.bar_bg')};
  color: white;
  display: flex;
  flex-direction: row;
`
export const EditorBar = styled(BaseBar)`position: relative;`
export const AlertBar = styled(BaseBar)`
  position: relative;
  padding: 18px;
  color: #365760;
  &:before {
    content: '⚠ ';
    margin-right: 10px;
    color: tomato;
  }
`

export const InfoBar = styled(BaseBar)`
  padding: 10px;
  min-height: 70px;
  background: ${props =>
    props.active ? theme('u_panel.active_bg', props) : ''};
`
export const InputBar = styled.input`
  caret-color: ${theme('u_panel.search_input')};
  flex-grow: 1;
  font-family: '.SFNSText-Light', 'SF UI Text', 'Helvetica Neue', 'Arial',
    'Lucida Grande', 'Segoe UI', Noto Sans, sans-serif;
  height: 100%;
  width: auto;
  outline: none;
  font-weight: 200;
  color: ${theme('u_panel.search_input')};
  font-size: 1.6rem;
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
  font-size: 1.5em;
  color: white;
  > a {
    color: ${theme('u_panel.link')};
  }
`
export const Desc = styled.div`
  color: ${theme('u_panel.text')};
  text-overflow: ellipsis;
  font-size: 1.1em;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 7px;
`
export const Hint = styled.div`
  color: ${theme('u_panel.text')};
  margin-top: 10px;
  width: 30px;

  > svg {
    padding-right: 20px;
  }
`

export const SubInfoWraper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const RepoLang = styled.div`
  color: ${theme('u_panel.text')};
  font-style: italic;
`

export const RepoStar = styled.div`
  color: ${theme('u_panel.text')};
  font-style: italic;
  margin-right: 10px;
`

export const ImgIconWrapper = styled(Img)`
  width: 40px;
  height: 40px;
`

export const SVGIconWrapper = styled.div`
  > svg {
    width: 40px;
    height: 40px;
    margin-top: 3px;
  }
`
export const AddonSVGIconWrapper = styled.div`
  > svg {
    width: 30px;
    height: 30px;
    margin-top: 20px;
  }
`
