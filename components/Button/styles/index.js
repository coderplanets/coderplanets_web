import styled, { injectGlobal } from 'styled-components'

import { Button } from 'antd'

const MButton = styled(Button)`
  color: tomato;
  &:hover {
    color: tomato;
    border-color: tomato;
  }
  &:focus {
    color: tomato;
    border-color: tomato;
  }
  &:active {
    color: tomato;
    border-color: tomato;
  }
`

/* eslint-disable no-unused-expressions */
// TODO: move to global
injectGlobal`
 .ant-btn-clicked:after {
  border: 0 solid tomato;
 }
`
/* eslint-enable no-unused-expressions */

export default MButton
