/*
 *
 * Popconfirm
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'

import { makelogger } from '@utils'
import Popover from '@components/Popover'

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

/* eslint-disable-next-line */
const log = makelogger('c:Popconfirm:index')

const Hint = ({ content, closeIt, onConfirm }) => (
  <Wrapper>
    <Header>
      <WarningIcon src={`${ICON_CMD}/warning.svg`} />
      <Desc>{content}</Desc>
    </Header>
    <Footer>
      <div onClick={closeIt}>
        <CancleBtn>取消</CancleBtn>
      </div>
      <DeleteBtn onClick={onConfirm}>
        <CutIcon src={`${ICON_CMD}/cut_right.svg`} />
        <ConfirmText>继续</ConfirmText>
      </DeleteBtn>
    </Footer>
  </Wrapper>
)

class Popconfirm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { visible: false }
  }

  componentWillUnmount() {}

  closeIt() {
    this.setState({ visible: false })
  }

  onConfirm() {
    const { onConfirm } = this.props
    this.setState({ visible: false })
    onConfirm()
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
        content={
          <Hint
            content={content}
            closeIt={this.closeIt.bind(this)}
            onConfirm={this.onConfirm.bind(this)}
          />
        }
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
  onConfirm: PropTypes.func,
}

Popconfirm.defaultProps = {
  trigger: 'click',
  placement: 'bottom',
  content: '该操作不可逆，是否继续？',
  onConfirm: log,
}

export default Popconfirm
