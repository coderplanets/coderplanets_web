import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
export const Block = styled.div`
  ${cs.flexColumn('justify-between')};
  width: 33%;
  height: 340px;
  border: none;
  padding: 30px 25px;
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
  }
  transition: all 0.25s;
`
export const Header = styled.div`
  ${cs.flexColumn()};
`
export const IntroHead = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  ${cs.circle('20px')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  border-top: 1px solid;
  border-color: ${theme('thread.articleTitle')};
  font-size: 18px;
  cursor: pointer;
  padding-top: 5px;
`
export const IntroImg = styled(Img)`
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
  filter: saturate(0.5);
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  cursor: pointer;
  height: 45px;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.25s;
`
