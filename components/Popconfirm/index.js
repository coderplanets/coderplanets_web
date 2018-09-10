/*
 *
 * Popconfirm
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import Popover from '../Popover'

import {
  Wrapper,
  Header,
  Footer,
  WarningIcon,
  Desc,
  CancleBtn,
  DeleteBtn,
  CutIcon,
  ConfirmText,
} from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Popconfirm:index')
/* eslint-enable no-unused-vars */

const Hint = ({ content, closeIt }) => (
  <Wrapper>
    <Header>
      <WarningIcon src={`${ICON_CMD}/warning.svg`} />
      <Desc>{content}</Desc>
    </Header>
    <Footer>
      <div onClick={closeIt}>
        <CancleBtn>取消</CancleBtn>
      </div>
      <DeleteBtn onClick={closeIt}>
        <CutIcon src={`${ICON_CMD}/cut_right.svg`} />
        <ConfirmText>继续</ConfirmText>
      </DeleteBtn>
    </Footer>
  </Wrapper>
)

class Popconfirm extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  state = { visible: false }

  closeIt() {
    this.setState({ visible: false })
  }

  onVisibleChange(visible) {
    this.setState({ visible })
  }

  render() {
    const { children, trigger, placement, content } = this.props
    const { visible } = this.state

    return (
      <Popover
        placement={placement}
        trigger={trigger}
        visible={visible}
        content={<Hint content={content} closeIt={this.closeIt.bind(this)} />}
        onVisibleChange={this.onVisibleChange.bind(this)}
      >
        {children}
      </Popover>
    )
  }
}

Popconfirm.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: PropTypes.node.isRequired,
  content: PropTypes.string,
  trigger: PropTypes.string,
  placement: PropTypes.oneOf(['bottomLeft', 'bottom', 'right']),
}

Popconfirm.defaultProps = {
  trigger: 'click',
  placement: 'bottom',
  content: '该操作不可逆，是否继续？',
}

export default Popconfirm
