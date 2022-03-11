import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const OptionsWrapper = styled.div`
  ${css.flex('justify-evenly')};
  padding-top: 3px;
`
export const HeaderDivider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.desc')};
  width: 90%;
  align-self: center;
  opacity: 0.5;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Option = styled.div<TActive>`
  ${css.flex('align-center')};

  color: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  background: ${({ active }) => (active ? theme('mailBox.headHightBg') : '')};
  padding: 2px 8px;
  border-radius: 5px;
  line-height: 1;

  &:hover {
    cursor: pointer;
    font-size: bold;
  }
`
export const Icon = styled(Img)<TActive>`
  fill: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  ${css.size(18)};
  margin-right: 3px;
`
export const Title = styled.div``
