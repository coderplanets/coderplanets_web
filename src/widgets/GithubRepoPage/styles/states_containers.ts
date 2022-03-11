import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
`
type TBox = { grow: boolean; nomargin: boolean; nohover: boolean }
export const BoxWrapper = styled.div<TBox>`
  ${css.flexColumn('justify-evenly', 'align-center')};
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};

  border-radius: 4px;
  min-width: 100px;
  height: 70px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-right: ${({ nomargin }) => (nomargin ? 0 : '15px')};
  border: 1px solid;
  border-color: ${theme('banner.desc')};
  border-top: 2px solid;
  border-top-color: ${theme('banner.title')};
  &:hover {
    cursor: ${({ nohover }) => (nohover ? '' : 'pointer')};
  }
`
export const Label = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.9rem;
  ${BoxWrapper}:hover & {
    color: ${theme('banner.title')};
  }
  transition: color 0.2s;
`
export const Number = styled.div<{ small: string }>`
  font-size: ${({ small }) => (small ? '0.8rem' : '1.3rem')};
  color: ${theme('banner.title')};
`

export const BuilderWrapper = styled.div`
  ${css.flex()};
`
export const Avatar = styled(Img)`
  ${css.size(20)};
  border-radius: 3px;
  margin-left: 6px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
export const Linker = styled.a`
  transition: color 0.3s;
  color: ${theme('thread.extraInfo')};

  &:hover {
    cursor: pointer;
    color: ${theme('thread.extraInfo')};
    text-decoration: none;
  }
`
export const PopInfo = styled.div`
  ${css.flexColumn('align-both')};

  padding: 10px;
  padding-bottom: 0px;
`
export const PopAvatar = styled(Img)`
  width: 100px;
  height: 100px;
`
export const PopNickname = styled.a`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  font-weight: border;
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
  }
`
