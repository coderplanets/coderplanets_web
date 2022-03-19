import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ panelMinWidth: string }>`
  ${css.flexColumn()};
  width: 100%;
  min-width: ${({ panelMinWidth }) => panelMinWidth};
  max-height: 200px;
  overflow: hidden;
`
export const Block = styled.div`
  ${css.flex('align-start')};
  padding: 8px 10px;
  border-bottom: 1px solid;
  border-bottom-color: #0d3e4e;

  :last-child {
    padding-bottom: 10px;
    border-bottom: none;
  }

  &:hover {
    background: #0d3e4e;
    cursor: pointer;
  }
  transition: all 0.2s;
`
export const BlockA = styled(Block)`
  text-decoration: none;
`
export const IconWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 28px;
`
/* width: ${({ bigger }) => (bigger ? '24px' : '18px')};
  height: ${({ bigger }) => (bigger ? '24px' : '18px')}; */
export const Icon = styled(Img)<{ index: number }>`
  fill: ${theme('button.primary')};
  ${css.size(16)};
  margin-top: 4px;
  display: block;

  opacity: ${({ index }) => (index === 0 ? 1 : 0)};
  ${Block}:hover & {
    opacity: ${({ index }) => (index === 0 ? 1 : 0.8)};
  }
  transition: opacity 0.25s;
`
export const Intro = styled.div`
  ${css.flexColumn()};
  margin-left: 7px;
  width: 100%;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.div`
  ${css.cutRest('90%')};
  font-size: 14px;
`
export const LinkIcon = styled(Img)`
  ${css.size(10)};
  fill: ${theme('thread.articleTitle')};
  margin-left: 5px;
  display: none;

  ${Block}:hover & {
    display: block;
  }
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
  margin-top: 4px;
`
