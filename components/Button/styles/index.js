import styled from 'styled-components'

import { Button } from 'antd'

import { theme } from '../../../utils'

const MButton = styled(Button)`
  color: ${theme('button.fg')};
  background: ${theme('button.bg')};
  border-color: ${theme('button.border')};
  color: ${props =>
    props.hollow ? theme('button.border') : theme('button.fg')};
  background: ${props => (props.hollow ? 'transparent' : theme('button.bg'))};

  &:hover {
    color: ${theme('button.fg')};
    border-color: ${theme('button.border')};
    background: ${theme('button.hover')};
  }
  &:focus {
    color: ${theme('button.fg')};
    border-color: ${theme('button.border')};
    background: ${theme('button.focus')};
  }
  &:active {
    color: ${theme('button.fg')};
    border-color: ${theme('button.border')};
    background: ${theme('button.active')};
  }
`

/* eslint-disable no-unused-expressions */
// injectGlobal`
//  .ant-btn-clicked:after {
//   border: 0 solid ${color})};
//   }
// `
/* eslint-enable no-unused-expressions */

export default MButton
