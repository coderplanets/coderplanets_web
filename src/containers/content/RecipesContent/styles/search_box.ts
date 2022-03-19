import styled from 'styled-components'

import Input from '@/widgets/Input'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')}
  position: relative;
  width: 85%;
  margin-bottom: 10px;
`
export const SearchInput = styled(Input)`
  width: 100%;
  padding-left: 8px;
  height: 30px;
  font-size: 13px;
  ::placeholder {
    color: ${theme('form.text')};
    opacity: 0.6;
  }
`
