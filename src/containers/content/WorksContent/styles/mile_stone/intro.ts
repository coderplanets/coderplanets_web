import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import { Block } from './index'

export const Wrapper = styled.div`
  ${css.flexColumn('align-end', 'justify-between')};
  width: 260px;
  height: 100%;
  padding-top: 11px;
  padding-right: 30px;
`
export const Main = styled.div`
  ${css.flexColumn('align-end', 'justify-between')};
`
export const Title = styled.div`
  font-size: 20px;
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  text-align: right;
  margin-top: 8px;
  padding-left: 40px;
`
export const More = styled.div`
  ${css.flex('align-center')};
  padding-top: 6px;
  border-top: 1px solid #034250;
  opacity: 0;

  ${Block}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
export const IntroBtn = styled.div`
  color: ${theme('thread.articleDigest')};

  &:hover {
    color: #327ca1;
    cursor: pointer;
  }
`
export const LinkBtn = styled.a`
  color: ${theme('thread.articleDigest')};

  &:hover {
    color: #327ca1;
    text-decoration: underline;
    cursor: pointer;
  }
`
