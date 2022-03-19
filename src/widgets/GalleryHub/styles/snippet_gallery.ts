import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
type TBlock = { borderRight: boolean; borderTop: boolean }
export const Block = styled.div<TBlock>`
  ${css.flexColumn('justify-between')};
  width: 33%;
  height: 300px;
  border: 1px solid;
  border-left: none;
  border-right: ${({ borderRight }) => (borderRight ? '1px solid' : 'none')};
  border-top: ${({ borderTop }) => (borderTop ? '1px solid' : 'none')};
  border-color: #0d4353;
  padding: 15px;
  padding-left: 24px;

  :last-child {
    border-right: none;
  }
  &:hover {
    background: #04313e;
    border-color: #074c61;
  }
  transition: all 0.2s;
`
export const Header = styled.div`
  ${css.flexColumn()};
`

export const IntroHead = styled.div`
  ${css.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  ${css.circle(14)};
`
export const LangPrefix = styled.div`
  font-size: 14px;
  color: ${({ color }) => color};
  margin-right: 8px;
  font-family: sans-serif;
  filter: saturate(0.8);
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  cursor: pointer;
`
export const Footer = styled.div`
  ${css.flex('align-center', 'justify-between')};
  &:hover {
    cursor: pointer;
  }
`
