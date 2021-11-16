import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')}
  color: ${theme('thread.articleDigest')};
  width: 40%;
`
export const Text = styled.span`
  opacity: 0.8;
  font-size: 12px;
`
export const CurNum = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-left: 2px;
`
export const TotalNum = styled.span`
  margin-left: 4px;
  margin-right: 5px;
  color: ${theme('thread.articleDigest')};
`
export const Divider = styled.div`
  margin-left: 5px;
  margin-right: 2px;
  margin-top: -2px;
`
export const UnderlineBtn = styled.div`
  color: #139c9e;
  margin-left: 2px;
  margin-right: 2px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
