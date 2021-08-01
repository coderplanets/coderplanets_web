import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div<{ panelMinWidth: string }>`
  ${css.flexColumn('align-center')};
  width: 100%;
  min-width: ${({ panelMinWidth }) => panelMinWidth};
  max-height: 300px;
  overflow: hidden;
`
export const Block = styled.div`
  ${css.flex('align-start')};
  width: 100%;
  padding: 6px 10px;
  padding-left: 15px;

  &:hover {
    background: #0d3e4e;
    cursor: pointer;
  }
`
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #0d3e4e;
  margin-top: 3px;
  margin-bottom: 3px;
`
export const BlockA = styled(Block)`
  text-decoration: none;
`
export const Item = styled.div`
  ${css.flex('align-center')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 10px;
  opacity: 0.8;

  ${Item}:hover & {
    opacity: 1;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
`
export const LinkIcon = styled(Img)`
  ${css.size(10)};
  fill: ${theme('thread.articleDigest')};
  margin-left: 7px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
  margin-top: 4px;
`
