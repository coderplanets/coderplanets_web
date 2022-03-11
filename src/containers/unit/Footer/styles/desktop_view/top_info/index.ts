import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export { HeartCrabIcon } from '../home_layout'

type TWrapper = { noBottomBorder?: boolean }
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-center')};
  margin-bottom: ${({ noBottomBorder }) => (noBottomBorder ? '20px' : '30px')};
  padding-bottom: ${({ noBottomBorder }) => (noBottomBorder ? '0' : '35px')};
  border-bottom: ${({ noBottomBorder }) =>
    noBottomBorder ? 'none' : '1px solid'};
  border-bottom-color: ${({ noBottomBorder }) =>
    noBottomBorder ? 'transparent' : '#003949'};
`
export const InfoBar = styled.div`
  ${css.flex('align-center')};
  margin-top: 3px;
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(18)};
  margin-top: -1;
  margin-left: 2px;
  cursor: pointer;
`
export const HomeLogo = styled(CommunityFaceLogo)`
  ${css.size(16)};
  margin-top: -4px;
  margin-left: 2px;
  cursor: pointer;
  transform: rotate(-8deg);
`
export const SiteTitle = styled.div`
  position: relative;
  color: #007fa8;
  font-size: 18px;
  font-weight: bold;
  opacity: 0.8;
  margin-left: 3px;
  margin-right: 52px;
  letter-spacing: 1px;
`
export const Beta = styled.div`
  position: absolute;
  font-size: 11px;
  color: #876d8e;
  font-weight: normal;
  border-radius: 2px;
  padding: 0 3px;
  top: 2px;
  right: -35px;
`
export const ArrowDividerIcon = styled(Img)`
  fill: ${theme('footer.text')};
  ${css.size(20)};
  transform: rotate(180deg);
  margin-right: 6px;
`
export const Item = styled.a`
  ${css.flex('align-center')};
  color: ${theme('footer.title')};
  text-decoration: none;
  margin-left: 24px;
  opacity: 0.8;

  font-size: 14px;

  &:hover {
    color: ${theme('footer.hover')};
    text-decoration: underline;
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`

export const MainInfos = styled.div`
  ${css.flex('justify-between')};
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: 12px;
  margin-left: 5px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.25s;

  ${css.media.tablet`display: none;`};
`
