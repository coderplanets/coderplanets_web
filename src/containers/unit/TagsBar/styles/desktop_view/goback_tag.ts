import styled from 'styled-components'

import { TActive } from '@/spec'
import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div<TActive>`
  ${css.flex('align-center')};
  margin-bottom: 5px;
  max-width: 180px;
  padding: 5px;
  border-radius: 5px;

  background: ${({ active }) => (active ? '#0e303d' : 'transparent')};

  &:hover {
    background: #0e303d;
  }
`
export const TagIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 10px;
  ${css.size(14)};
  transform: rotate(17deg);
`

export const TagTitle = styled.div`
  color: ${theme('tags.text')};
  font-size: 15px;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
  transition: all 0.2s;
`
