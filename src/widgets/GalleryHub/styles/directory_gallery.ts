import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`

type TBlock = { borderRight: boolean; borderTop: boolean; clickable: boolean }
export const Block = styled.div<TBlock>`
  ${css.flexColumn('justify-between')};
  width: 25%;
  height: 230px;
  padding: 15px;
  padding-left: 24px;

  border: 1px solid;
  border-left: none;
  border-right: ${({ borderRight }) => (borderRight ? '1px solid' : 'none')};
  border-top: ${({ borderTop }) => (borderTop ? '1px solid' : 'none')};
  border-color: #0d4353;

  :last-child {
    border-right: none;
  }
  &:hover {
    background: ${({ clickable }) => (clickable ? '#04313e' : 'none')};
    border-color: ${({ clickable }) => (clickable ? '#074c61' : '#0d4353')};
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'normal')};
  }
  transition: all 0.2s;
`
export const Header = styled.div`
  ${css.flexColumn()};
`
export const IntroHead = styled.div<{ clickable: boolean }>`
  ${css.flex('align-center')};
  &:hover {
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'normal')};
  }
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.circle(22)};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-left: 12px;
`
export const Footer = styled.div<{ clickable: boolean }>`
  ${css.flex('align-center', 'justify-between')};
  &:hover {
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'normal')};
  }
`
export const UpdatedAt = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
