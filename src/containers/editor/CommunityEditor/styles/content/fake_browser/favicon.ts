import styled from 'styled-components'

import css from '@/utils/css'
import Img from '@/Img'

const headerBg = '#053542'

export const HolderIcon = styled.div`
  ${css.size(14)};
  border-radius: 3px;
  background: ${headerBg};
  margin-left: 15px;
`
export const RealIcon = styled(Img)`
  margin-left: 15px;
  ${css.size(14)};
  border-radius: 3px;
  background: ${headerBg};
`
