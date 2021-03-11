import styled from 'styled-components'

import { css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  position: relative;
  ${css.flexColumn('align-center')};
  width: 300px;
  padding-right: 40px;
  padding-left: 30px;
  margin-top: -110px;
`
export const Holder = styled(Img)``
