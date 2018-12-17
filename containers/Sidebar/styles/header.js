import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'
import { Container } from './index'

export const Wrapper = styled.div`
  ${cs.flex()};
  margin-top: 14px;
  margin-bottom: ${({ pin }) => (pin ? '0' : '20px')};
  ${Container}:hover & {
    margin-bottom: 4px;
  }
`
export const HeaderFuncs = styled.div`
  ${cs.flexGrow()};
`
export const PinIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export const SiteLogoWrapper = styled.div`
  margin-left: 15px;
  color: ${theme('sidebar.logoText')};
  letter-spacing: 1px;
  margin-top: -4px;
  display: ${({ pin }) => (pin ? 'none' : 'block')};
  ${Container}:hover & {
    display: none;
  }
`
export const SiteLogo = styled(Img)`
  width: 25px;
  height: 25px;
  opacity: 0.7;
  margin-top: -4px;
  display: block;
`
export const PinIcon = styled(Img)`
  fill: ${({ pin }) => (pin ? theme('sidebar.pinActive') : 'grey')};
  margin-right: 10px;
  width: 23px;
  height: 23px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};
  transition: visibility 0s, opacity 0.3s linear;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
  ${Container}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
export const ExploreWrapper = styled.div`
  padding-left: 16px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};

  ${Container}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
export const ExploreContent = styled.div`
  ${cs.flex('align-center')};
`
export const ExploreText = styled.div`
  letter-spacing: 1.5px;
  ${ExploreContent}:hover & {
    letter-spacing: 3px;
  }
  transition: letter-spacing 0.3s;
`
export const ExploreIcon = styled(Img)`
  fill: ${theme('button.primary')};
  width: 16px;
  height: 16px;
  margin-right: 5px;
  display: block;
  margin-top: -1px;
`
