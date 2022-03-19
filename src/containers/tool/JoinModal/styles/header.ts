import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  filter: ${theme('modal.subPanelShadow')};
  background: ${theme('modal.bg')};
  padding: 0 28px;
  height: 50px;
`
export const WechatLogo = styled(Img)`
  ${css.size(18)};
  margin-right: 10px;
  filter: saturate(0.6);
`
export const Title = styled.div`
  ${css.flex('align-center')};
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
`
export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Letter = styled.div<TActive>`
  ${css.flex('align-both')};
  color: ${({ $active }) =>
    $active ? '#139c9e' : theme('thread.articleDigest')};
  font-size: ${({ $active }) => ($active ? '15px' : '14px')};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  margin-left: 13px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: #139c9e;
  }
`
