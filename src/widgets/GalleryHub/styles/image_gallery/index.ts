import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  width: 100%;
`
// GalleryWrapper base
export const WrapperBase = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
export const BlockBase = styled.div<{ borderTop: boolean }>`
  ${css.flexColumn('justify-between')};
  width: 50%;
  height: auto;
  border: 1px solid;
  border-top: ${({ borderTop }) => (borderTop ? '1px solid' : 'none')};
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
  border-color: #0d4353;
  padding: 5px;

  :last-child {
    border-right: none;
  }
  &:hover {
    background: #04313e;
    border-color: #074c61;
  }
  transition: all 0.25s;
`
export const ImageWrapper = styled.div`
  height: 240px;
`
export const ImageBase = styled(Img)`
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
  opacity: 0.9;

  cursor: pointer;

  ${BlockBase}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.25s;
`
export const IntroBase = styled.div`
  ${css.flexColumn()};
  padding: 10px;
  padding-left: 2px;
`
export const IntroHeadBase = styled.div`
  ${css.flex('align-center', 'justify-between')};
  &:hover {
    cursor: pointer;
  }
`
export const TitleBase = styled.div`
  color: ${theme('thread.articleTitle')};
  cursor: pointer;
`
export const FooterBase = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
`
export const FlagIconBase = styled(Img)`
  ${css.size(15)};
`
