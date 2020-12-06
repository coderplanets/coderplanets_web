import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start', 'justify-center')};
  width: 140px;
`
export const Card = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  height: 36px;
  color: #7c8f90;
  background: #003948;
  padding: 6px 0;
  padding-top: 4px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 2%);
`
export const CurCard = styled(Card)`
  background: #05303e;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: -4px;
  padding-top: 8px;
  height: 34px;
`
export const Title = styled.div`
  margin-left: 10px;
  font-size: 13px;
  font-weight: bold;
`
export const Operator = styled.div`
  /* display: ${({ show }) => (show ? 'block' : 'none')}; */
  display: none;

  ${Card}:hover & {
    display: block;
  }
`
export const BackIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 6px;
  margin-top: -2px;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
