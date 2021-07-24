import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  min-height: 220px;
  background: ${theme('modal.bg')};
  filter: ${theme('modal.subPanelShadow')};
  transition: min-height 0.2s;
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
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
export const Media = styled.div`
  ${css.size(80)};
  ${css.flexColumn('align-both')};
  margin-bottom: 18px;
  cursor: pointer;
`
export const LogoWrapper = styled.div<{ bg: string | undefined }>`
  ${css.circle(38)};
  ${css.flex('align-both')};
  background: ${({ bg }) => bg || '#164651'};
  margin-bottom: 5px;
`
export const Logo = styled(Img)<{ small: boolean }>`
  fill: ${theme('thread.articleTitle')};
  display: block;
  width: ${({ small }) => (small ? '24px' : '40px')};
  height: ${({ small }) => (small ? '24px' : '40px')};
  border-radius: 100%;
  filter: saturate(0.6);
  opacity: 0.8;

  ${Media}:hover & {
    filter: saturate(0.8);
    opacity: 1;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: 600;
  font-size: 14px;

  ${Media}:hover & {
    color: #129698;
  }
`
