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
  height: 230px;
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
export const LinkHead = styled.div`
  ${css.flex('align-center', 'justify-between')};
  font-size: 12px;
  margin-bottom: 5px;
`

export const IntroHead = styled.div`
  ${css.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  ${css.size(20)};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`
export const Desc = styled.div`
  ${css.lineClamp(2)}
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-top: 15px;
  opacity: 0.9;
  cursor: pointer;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.2s;
`
export const Footer = styled.div`
  ${css.flex('align-end', 'justify-between')};
`
export const CommentWrapper = styled.div`
  margin-bottom: 3px;
`
