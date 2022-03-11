import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  margin-top: 30px;
  margin-left: 35px;
  margin-right: 40px;
  margin-bottom: 50px;
`
export const RespectText = styled.div`
  color: ${theme('editor.placeholder')};
`
export const Divider = styled.div`
  border-top: 1px solid;
  border-color: ${theme('editor.placeholder')};
  margin-top: 10px;
  width: 55%;
  margin-bottom: 20px;
`

export const PublishButtons = styled.div`
  width: 80%;
  text-align: center;
`
