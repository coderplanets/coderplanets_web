import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  width: 100%;
  min-height: 220px;
  background: ${theme('modal.bg')};
  filter: ${theme('modal.subPanelShadow')};
  transition: min-height 0.2s;

  ${css.media.mobile`
    background: transparent;
    filter: none;
    padding-left: 0;
    padding-right: 0;
  `};
`
export const Header = styled.div`
  ${css.flex('align-end')};
  margin-top: 15px;
  padding-left: 25px;
  margin-bottom: 20px;
`
export const Hint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`
export const Article = styled.div`
  color: ${theme('thread.articleTitle')};
  ${css.cutRest('180px')};
  font-size: 14px;
  margin-left: 5px;
  margin-right: 5px;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;

  ${css.media.mobile`
    justify-content: space-between;
  `};
`
export const Media = styled.div`
  ${css.size(80)};
  ${css.flexColumn('align-both')};
  cursor: pointer;

  ${css.media.mobile`
    ${css.size(70)};
    ${css.flexColumn('align-both')};
    margin-bottom: 12px;
  `};
`
export const LogoWrapper = styled.div<{ noBg: boolean }>`
  ${css.circle(28)};
  ${css.flex('align-both')};
  background: ${({ noBg }) => (noBg ? 'transparent' : theme('hoverBg'))};
  margin-bottom: 8px;

  ${css.media.mobile`
    transform: scale(0.8);
  `};
`
export const Logo = styled(Img)<{ small: boolean }>`
  fill: ${theme('thread.articleDigest')};
  ${({ small }) => (small ? css.circle('20px') : css.circle('28px'))};
  filter: saturate(0.6);
  opacity: 0.8;

  ${Media}:hover & {
    filter: saturate(0.8);
    opacity: 1;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;

  ${Media}:hover & {
    color: ${theme('thread.extraInfo')};
    font-weight: 500;
  }

  ${css.media.mobile`
    margin-top: 3px;
    font-size: 13px;
  `};
`
