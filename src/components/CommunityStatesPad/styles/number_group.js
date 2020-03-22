import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-end')};
`
export const SubNumberWrapper = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('banner.number')};
  font-size: 12px;
  margin-right: 0.5px;
`
export const GreenDot = styled.div`
  background: ${theme('baseColor.green')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 5px;
`
export const PlusSign = styled.div`
  color: ${theme('baseColor.green')};
  margin-right: 2px;
`
// text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
export const NumberItem = styled.div`
  font-size: 14px;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    cursor: ${({ readOnly }) => (readOnly ? '' : 'pointer')};
  }

  ${cs.media.tablet`font-size: 1.2rem;`};
  ${cs.media.mobile`font-size: 1.2rem;`};
`
export const LargeNumberItem = styled(NumberItem)`
  font-size: 28px;
  margin-top: -4px;
  margin-right: 3px;
`
