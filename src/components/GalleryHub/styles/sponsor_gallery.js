import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
export const Block = styled.div`
  ${cs.flexColumn('justify-between')};
  width: ${({ column }) => (column === 3 ? '33%' : '25%')};
  height: ${({ level }) => (level === 'gold' ? '280px' : '130px')};
  border: none;
  padding: ${({ level }) => (level === 'gold' ? '25px 25px' : '18px 25px')};
  border-radius: 2px;
  border: 1px solid transparent;
  margin-bottom: ${({ level }) => (level === 'gold' ? '20px' : '10px')};

  :last-child {
    border-right: none;
  }
  &:hover {
    background: #04313e;
    border-color: #074c61;
    border: 1px solid #044c5f;
    cursor: pointer;
    padding-top: 12px;
  }
  transition: all 0.25s;
  transition-delay: 0.2s;
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
  font-size: ${({ level }) => (level === 'gold' ? '18px' : '16px')};
  cursor: pointer;
  padding-top: 5px;

  ${Block}:hover & {
    padding-top: 0;
    border-color: transparent;
  }
  transition: all 0.25s;
  transition-delay: 0.2s;
`
export const IntroImg = styled(Img)`
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
  filter: saturate(0.5);
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: ${({ level }) => (level === 'gold' ? '14px' : '13px')};
  cursor: pointer;
  height: 45px;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.3s;
  transition-delay: 0.2s;
`
export const LinkWrapper = styled.div`
  opacity: 0;
  ${Block}:hover & {
    opacity: 1;
  }
  transition: all 0.25s;
  transition-delay: 0.2s;
`
