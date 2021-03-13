import styled from 'styled-components'

import { TActive } from '@/spec'
import { css, theme } from '@/utils'
// import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-top: 30px;
  height: 105px;
  width: 700px;
`
export const Box = styled.div<TActive>`
  ${css.flexColumn('align-start', 'justify-between')};
  padding: 10px 12px;
  width: ${({ active }) => (active ? '160px' : '154px')};
  height: ${({ active }) => (active ? '105px' : '100px')};
  border-radius: 5px;
  border: 1px solid;
  border-color: ${theme('thread.articleDigest')};

  border: ${({ active }) =>
    active ? '1px solid #327faf;' : '1px solid #31576f;'};
  box-shadow: ${({ active }) =>
    active ? '0px 7px 20px 10px rgba(0, 0, 0, 0.15);' : 'none'};

  &:hover {
    cursor: pointer;
    border: 1px solid #327faf;
    box-shadow: 0px 7px 20px 10px rgba(0, 0, 0, 0.15); /* same with the popover */
  }
  transition: all 0.25s;
`
export const HeaderText = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  font-size: 12px;
`
export const MainText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  font-weight: bold;
`
export const FooterText = styled.div`
  font-size: 13px;
`
