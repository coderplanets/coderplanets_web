import styled from 'styled-components'

import { Button } from 'antd'

import { theme } from '../../../utils'

/* background-color: ${props => */
/* props.ghost ? 'transparent' : theme('button.bg')} !important; */
const SmallButton = styled(Button)`
  padding: 0 7px;
  font-size: 14px;
  border-radius: 4px;
  height: 24px;
  border-color: ${theme('button.primary')} !important;
  color: ${props =>
    props.ghost ? theme('button.primary') : theme('button.fg')} !important;

  background-color: ${props =>
    props.ghost ? 'transparent' : theme('button.primary')};

  &:hover {
    color: ${theme('button.fg')};
    border-color: ${theme('button.primary')};
    background: ${theme('button.primary')};
  }
  &:focus {
    color: ${theme('button.fg')};
    border-color: ${theme('button.border')};
    background: ${theme('button.primary')};
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

export default SmallButton
