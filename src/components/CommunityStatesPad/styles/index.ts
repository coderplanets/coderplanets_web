import styled from 'styled-components'

import type { TActive } from '@/spec'
// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  text-align: center;
  ${css.media.mobile`
    margin-top: -4px;
  `};
`
type TNumberSection = TActive & { readOnly?: boolean }
export const NumberSection = styled.div<TNumberSection>`
  ${css.flexColumn('align-end')};
  background-color: ${({ active }) =>
    active ? theme('banner.numberHoverBg') : ''};

  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ readOnly }) =>
      readOnly ? '' : theme('banner.numberHoverBg')};
  }
`
export const ContentSection = styled(NumberSection)`
  ${css.media.mobile`display: none`};
`
export const VolunteerSection = styled(NumberSection)<{ alignCenter: boolean }>`
  align-items: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-end')};
  ${css.media.mobile`display: none`};
`
export const ChargeSection = styled(NumberSection)`
  ${css.flexColumn('align-center', 'justify-between')};
  ${css.media.mobile`display: none`};
`
type TNumberTitle = { small?: boolean; readOnly?: boolean }
// text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
export const NumberTitle = styled.div<TNumberTitle>`
  color: ${theme('banner.numberDesc')};
  font-size: ${({ small }) => (small ? '11px' : '12px')};
  margin-top: ${({ small }) => (small ? '4px' : '0')};
  margin-bottom: 2px;
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    cursor: ${({ readOnly }) => (readOnly ? '' : 'pointer')};
  }
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 20px;
  align-self: flex-end;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;

  ${css.media.tablet`
    margin-left: 5px;
    margin-right: 5px;
  `};
  ${css.media.mobile`display: none`};
`
