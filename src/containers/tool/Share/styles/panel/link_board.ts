import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'

export const Header = styled.div`
  ${css.flex('justify-between', 'align-center')};
`
export const TabWrapper = styled.div`
  ${css.flex('align-end')};
`
export const TabName = styled.div<TActive>`
  font-size: 14px;
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  margin-right: 12px;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
    cursor: pointer;
  }

  transition: color 0.2s;
`
export const BoxWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 8px;
  margin-left: -8px;
`
export const Inputer = styled(Input)`
  width: 380px;

  ${css.media.mobile`
    width: 310px;
  `};
`
