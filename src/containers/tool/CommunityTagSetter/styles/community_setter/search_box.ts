import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'
import Input from '@/widgets/Input'

export const Wrapper = styled.div`
  width: 100%;
  ${css.flex('align-center')};
  padding-right: 20px;
`
export const SearchInput = styled(Input)`
  width: 480px;
`
export const PlusIcon = styled(Img)`
  ${css.size(12)};
  margin-right: 5px;
  fill: ${theme('button.primary')};
`
