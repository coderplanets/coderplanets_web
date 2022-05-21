import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Button from '@/widgets/Buttons/Button'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  padding: 0 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid;
  border-top-color: ${theme('border')};
  height: 65px;
`
export const ConfirmBtn = styled(Button)`
  height: 28px;
`
