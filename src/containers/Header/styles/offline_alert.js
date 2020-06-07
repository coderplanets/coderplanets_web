import styled from 'styled-components'

// import Img from 'components/Img'
// import { theme } from 'utils'
import { theme, cs, animate } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  background: ${theme('baseColor.error')};
  color: ${theme('header.bg')};
  margin-left: 30px;
  padding: 0 16px;
  border-radius: 4px;
  animation: ${animate.breath} 1.5s linear infinite;

  ${cs.media.tablet`display: none;`};
`
export const Holder = 1
