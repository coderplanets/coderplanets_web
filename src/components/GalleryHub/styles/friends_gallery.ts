import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-center')};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
export const Block = styled.div`
  ${css.flexColumn('justify-between')};
  width: ${({ column }) => (column === 4 ? '25%' : '20%')};
  max-width: 200px;
  height: 60px;
  border: none;
  padding: 18px 25px;
  border-radius: 2px;
  border: 1px solid transparent;

  :last-child {
    border-right: none;
  }
  &:hover {
    background: #04313e;
    border-color: #074c61;
    border: 1px solid #044c5f;
    cursor: pointer;
    padding-top: 8px;
  }
  transition: all 0.25s;
  transition-delay: 0.2s;
`
export const Header = styled.div`
  ${css.flexColumn()};
`
export const IntroHead = styled.div`
  ${css.flex('align-center')};
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  ${css.circle(16)};
  margin-right: 10px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  cursor: pointer;
  padding-top: 3px;

  ${Block}:hover & {
    padding-top: 0;
    border-color: transparent;
  }
  transition: all 0.25s;
  transition-delay: 0.2s;
`
export const LinkWrapper = styled.div`
  opacity: 0;
  padding-left: 26px;
  width: 100%;
  ${Block}:hover & {
    opacity: 1;
  }
  transition: all 0.25s;
  transition-delay: 0.2s;
`
