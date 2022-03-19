import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  position: relative;
  ${css.flexColumn('align-end')};
`
export const SubNumberWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('banner.numberDesc')};
  font-size: 13px;
  margin-top: -1px;
`
export const SubNum = styled.div`
  opacity: 0.6;
`
export const GreenDot = styled.div`
  background: ${theme('baseColor.green')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 5px;
`
export const ActivitySpark = styled.div`
  position: absolute;
  bottom: -38px;
  right: -14px;
  width: 50px;
  height: 40px;
`
// text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
export const NumberItem = styled.div<{ readOnly: boolean }>`
  font-size: 16px;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    cursor: ${({ readOnly }) => (readOnly ? '' : 'pointer')};
  }

  ${css.media.tablet`font-size: 16px;`};
  ${css.media.mobile`
    font-size: 16px;
    margin-bottom: 2px;
  `};
`

export const PopHint = styled.div`
  width: 200px;
`
