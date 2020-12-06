import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  /* background: #05303e; */
  background: #042833;
  padding-top: 12px;
  border: 1px solid;
  border-color: #09303e;
  margin-top: -8px;
`
const activeColor = '#009C9E'
export const Item = styled.div`
  ${css.flex('justify-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  font-size: 14px;
  padding: 8px;

  &:hover {
    color: ${({ active }) =>
      active ? activeColor : theme('thread.articleDigest')};
    cursor: pointer;
  }

  :last-child {
    border-bottom: none;
  }
  transition: all 0.25s;
`
export const Icon = styled(Img)`
  display: ${({ active }) => (active ? 'block' : 'none')};
  fill: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};

  ${css.size(15, false)};

  ${Item}:hover & {
    display: block;
  }
`
