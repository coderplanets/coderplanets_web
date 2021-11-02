import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import animate from '@/utils/animations'

export { LinkIcon, LinkInput } from './index'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const LinkWrapper = styled.div`
  ${css.flex('align-center')};
  position: relative;
  margin-left: 15px;
`
export const ErrorHint = styled.div`
  position: absolute;
  font-size: 12px;
  right: -68px;
  top: 4px;
  color: ${theme('baseColor.red')};
  animation: ${animate.breath} 2.5s linear infinite;
`
