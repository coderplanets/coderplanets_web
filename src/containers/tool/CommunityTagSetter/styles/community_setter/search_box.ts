import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'
import Input from '@/widgets/Input'

export const Wrapper = styled.div`
  width: 100%;
  ${css.flex('align-center')};
  padding-right: 20px;
`
export const SearchInput = styled(Input)`
  width: 100%;
`
export const PlusIcon = styled(Img)`
  ${css.size(12)};
  margin-right: 5px;
  fill: ${theme('button.primary')};
`
