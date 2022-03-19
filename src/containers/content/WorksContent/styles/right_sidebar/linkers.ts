import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-end', 'justify-between')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const LinkCardWrapper = styled.div`
  position: relative;
  ${css.flexColumn('align-start', 'justify-between')};
  margin-bottom: 10px;
  padding: 14px;
  padding-bottom: 6px;
  background: #0b2f3a;
  border: 1px solid transparent;
  border-radius: 5px;
  height: 115px;
  width: 94px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    border-color: #135b74;
  }
  transition: all 0.2s;
`
export const Digest = styled.div`
  ${css.flexColumnGrow('align-start')};
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 8px;

  ${LinkCardWrapper}:hover & {
    font-weight: bold;
  }
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
  opacity: 0.8;
  margin-left: -1px;

  ${LinkCardWrapper}:hover & {
    opacity: 0.9;
  }
`
export const ButtonWrapper = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
`
export const Totol = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
  opacity: 0.8;

  ${LinkCardWrapper}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }

  transition: opacity 0.25s;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  transform: rotate(180deg);
  opacity: 0;
  margin-top: 1px;

  ${LinkCardWrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
    opacity: 1;
  }

  transition: opacity 0.25s;
`
