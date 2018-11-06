import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const HeaderWrapper = styled.header`
  height: 33px;
  ${cs.flex()};
  background: ${({ fixed }) =>
    fixed ? theme('header.fixed') : theme('header.bg')};

  border-bottom: 1px solid;
  border-bottom-color: ${theme('header.spliter')};
  align-items: center;
  padding: 0 4vw;
  padding-right: 5.5vw;
  margin-left: ${({ leftOffset }) => leftOffset};
  transition: all 0.2s;
  box-shadow: ${theme('preview.shadow')};
`
// box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(234, 234, 234, 0.28);

// margin-left: ${props => (props.offsetLeft ? '180px' : '0')};

export const RouterWrapper = styled.div`
  ${cs.flexGrow()};
  height: 100%;
  margin-top: 1px;
`

export const MiniMapWrapper = styled.div`
  ${cs.flex('align-end')};
  margin-left: 4vw;
`

export const CommunityLogo = styled(Img)`
  width: 26px;
  height: 26px;
  margin-right: 25px;
  display: block;
  margin-bottom: 2px;
`

/*
   border-bottom: 2px solid;
   border-bottom-color: ${props =>
   props.active ? theme('thread.articleTitle') : theme('header.fixed')};
 */

// ${theme('thread.articleTitle', props)}
// border-bottom: ${props => (props.active ? '2px solid tomato' : '')};

export const MiniTab = styled.div`
  border-bottom: ${({ active }) => (active ? '3px solid' : '')};
  border-bottom-color: ${({ active }) =>
    active ? theme('thread.articleTitle') : ''};
  padding-bottom: ${({ active }) => (active ? '2px' : '5px')};
  padding-right: 5px;
  padding-left: 5px;
  margin-right: 6px;
  color: ${({ active }) =>
    active ? theme('header.tabActive') : theme('header.tabOthers')};
  cursor: pointer;
`
export const HeaderIcon = styled(Img)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
`
export const Operations = styled.div`
  ${cs.flex('align-center')};
`
export const Search = styled.div`
  color: ${theme('header.fg')};
  padding-top: 8px;
`
export const AffixHeader = styled.div`
  display: ${({ fixed }) => (fixed ? 'block' : 'none')};
`
export const RawHeader = styled.div`
  display: ${({ fixed }) => (!fixed ? 'block' : 'none')};
`
