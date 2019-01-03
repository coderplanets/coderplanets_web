import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  margin-top: 30px;
  margin-left: 35px;
  margin-right: 40px;
  margin-bottom: 50px;
`
export const RespectText = styled.div`
  color: ${theme('editor.placeholder')};
  display: ${({ show }) => (show ? 'block' : 'none')};
`
export const Divider = styled.div`
  border-top: 1px solid;
  border-color: ${theme('editor.placeholder')};
  margin-top: 10px;
  width: 55%;
  margin-bottom: 20px;
`

export const PublishBtns = styled.div`
  width: 50%;
  text-align: center;
`
