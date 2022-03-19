import styled from 'styled-components'

import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')}
  margin-top: -30px;
`
export const Image = styled(Img)<{ size: string }>`
  height: ${({ size }) => (size === 'small' ? '60px' : '200px')};
  object-fit: cover;
  border-radius: 8px;
`
export const Desc = styled.div`
  margin-top: 25px;
`
