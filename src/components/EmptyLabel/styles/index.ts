import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};

  color: ${theme('banner.desc')};
  height: 200px;
`
export const Title = styled.div<{ size: string }>`
  margin-top: 10px;
  font-size: ${({ size }) => (size === 'default' ? '1rem' : '1.2rem;')};
`

export const Icon = styled(Img)<{ size: string }>`
  fill: ${theme('banner.desc')};
  width: ${({ size }) => (size === 'default' ? '70px' : '100px')};
  height: ${({ size }) => (size === 'default' ? '70px' : '100px')};
`
