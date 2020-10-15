import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  position: relative;
  padding-top: 20px;
  padding-bottom: 50px;
  height: auto;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
`
export const Title = styled.h2`
  color: ${theme('form.label')};
`
export const FormWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`
