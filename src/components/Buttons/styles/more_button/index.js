import styled from 'styled-components'

import Img from '@/Img'
import { Wrapper as NormalButton } from '../button'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};

  /* &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.25s; */
`
export const ButtonWrapper = styled(NormalButton)`
  height: 30px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-right: 6px;
`
export const MoreButtonWrapper = styled(NormalButton)`
  height: 30px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 6px;
`
export const Divider = styled.div`
  width: 1px;
  height: 14px;
  background: ${theme('button.fg')};
  margin-left: 10px;
  margin-right: 8px;
  opacity: 0.5;
`
export const MoreIcon = styled(Img)`
  fill: ${theme('button.fg')};
  width: 12px;
  height: 12px;
  display: block;
  transform: rotate(180deg);
`
