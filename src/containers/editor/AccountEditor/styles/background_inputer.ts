import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const FormItemWrapper = styled.div`
  ${css.flex()};
  margin-bottom: 20px;
`
export const FormLabel = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: ${theme('form.label')};
  margin-right: 10px;
  margin-top: 5px;
  width: 75px;
  margin-left: -12px;
`
export const FormInput = styled.div`
  ${css.flex('align-center')};
  width: 280px;
`
export const Adder = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(25)};
  margin-left: 5px;
  margin-top: 5px;
  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }
  transition: fill 0.3s;
`
export const BackgroundsWrapper = styled.div`
  ${css.flexColumn()};
  margin-top: -10px;
  margin-bottom: 20px;
  margin-left: 22%;
`
export const BackgroundItem = styled.div`
  ${css.flex('align-center')};
`
export const BgTitle = styled.div`
  color: ${theme('banner.desc')};
  font-weight: bold;
`

export const BgDivider = styled.div`
  color: ${theme('banner.desc')};
  font-size: 1.2rem;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: -3px;
`

export const BgDesc = styled.div`
  color: ${theme('banner.desc')};
`

export const DeleteIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(12)};
  margin-left: 8px;
  opacity: 0;
  ${BackgroundItem}:hover & {
    fill: ${theme('banner.title')};
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
  transition: opacity 0.3s;
`
