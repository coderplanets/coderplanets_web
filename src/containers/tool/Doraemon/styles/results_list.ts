import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme, animate, zIndex } from '@/utils/css'

export const Wrapper = styled.div<{ empty: boolean }>`
  position: relative;
  display: ${({ empty }) => (empty ? 'none' : 'flex')};
  flex-direction: column;
  width: 100%;
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('shell.searchIcon')};
  ${css.size(30)};
  margin-top: 20px;
  animation: ${animate.rotate360} 1s linear infinite;
`
export const AddOn = styled.div`
  margin-left: 15px;
  width: 25px;
`
export const PageOverlay = styled.div<TActive>`
  bottom: 0;
  cursor: pointer;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${zIndex.doraemonOverlay};
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`
// flex-grow example: http://zhoon.github.io/css3/2014/08/23/flex.html
export const PanelContainer = styled.div<TActive>`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  width: 45vw;
  max-width: 550px;
  position: fixed;
  top: 12vh;
  z-index: ${zIndex.doraemon};
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  left: 50%;
  margin-left: -19vw;
`
// #001b21;
export const BaseBar = styled.div`
  ${css.flex('align-center')};
  border: 1px solid ${theme('shell.border')};
  width: 100%;
  height: 65px;
  background: ${theme('shell.barBg')};
  color: white;
`
export const EditorBar = styled(BaseBar)`
  position: relative;
`
export const AlertBar = styled(BaseBar)`
  position: relative;
  padding: 18px;
  color: #365760;
  &:before {
    content: '⚠ ';
    margin-right: 10px;
    color: ${theme('baseColor.red')};
  }
`
export const InfoBar = styled(BaseBar)<TActive>`
  padding: 10px;
  min-height: 65px;
  background: ${({ active }) => (active ? theme('shell.activeBg') : '')};
  &:hover {
    cursor: pointer;
  }
`
export const InputBar = styled.input`
  caret-color: ${theme('shell.searchInput')};
  flex-grow: 1;
  font-family: '.SFNSText-Light', 'SF UI Text', 'Helvetica Neue', 'Arial',
    'Lucida Grande', 'Segoe UI', Noto Sans, sans-serif;
  height: 100%;
  width: auto;
  outline: none;
  color: ${theme('shell.searchInput')};
  font-size: 18px;
  max-height: none;
  background-color: transparent;
  padding: 0 20px 0px 20px;
  border: 0;
  border-radius: 0;
  transition: all 400ms ease;
`
export const ContentWrapper = styled.div`
  text-align: left;
  flex-grow: 1;
  max-width: 80%;
`
export const Title = styled.div`
  color: ${theme('shell.title')};
  font-size: 18px;
  > a {
    color: ${theme('shell.link')};
  }

  ${css.cutRest('400px')};
  ${css.media.mobile`
      ${css.cutRest('200px')};
  `};
`
export const Desc = styled.div`
  color: ${theme('shell.desc')};
  font-size: 14px;

  ${css.cutRest('400px')};
`
export const Hint = styled.div`
  color: ${theme('shell.desc')};
  margin-top: 10px;
  margin-right: 15px;
  width: 30px;
  font-size: 13px;
`
export const HintEnter = styled(Img)`
  color: ${theme('shell.desc')};
  margin-top: 10px;
  margin-right: 15px;
  ${css.size(30)};
  transform: rotateX(180deg);
  fill: ${theme('shell.desc')};
`

export const SubInfoWraper = styled.div`
  ${css.flex('justify-between')};
`

export const RepoLang = styled.div`
  color: ${theme('shell.desc')};
  font-style: italic;
`

export const RepoStar = styled.div`
  color: ${theme('shell.desc')};
  font-style: italic;
  margin-right: 10px;
`

export const NodeSVGIcon = styled(Img)<{ reverse: boolean }>`
  ${css.size(40)};
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`

export const ThemeDot = styled.div<{ bg: string }>`
  ${css.circle(35)};
  background: ${({ bg }) => bg};
`
// TODO: rename -> PrefixIcon
export const PrefixSVGIcon = styled(Img)`
  ${css.size(30)};
`
export const PrefixSearchIcon = styled(Img)`
  ${css.size(30)};
  fill: ${theme('shell.searchIcon')};
  margin-top: 5px;
`
export const PrefixMagicIcon = styled(Img)`
  width: 30px;
  height: 25px;
  transform: rotate(-30deg);
`
