/*
 *
 * BadContentRepot
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import Modal from '../Modal'
import { Wrapper, Title, Icon } from './styles'
import Content from './Content'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:BadContentRepot:index')
/* eslint-enable no-unused-vars */

class BadContentRepot extends React.Component {
  state = {
    show: false,
  }

  componentDidMount() {}

  componentWillUnmount() {}

  toggleModal() {
    const { show } = this.state
    this.setState({ show: !show })
  }

  render() {
    const { title } = this.props
    const { show } = this.state

    return (
      <React.Fragment>
        <Modal
          width="500px"
          show={show}
          showCloseBtn
          onClose={this.toggleModal.bind(this)}
        >
          <Content />
        </Modal>
        <Wrapper onClick={this.toggleModal.bind(this)}>
          <Icon src={`${ICON_CMD}/flag.svg`} />
          <Title>{title}</Title>
        </Wrapper>
      </React.Fragment>
    )
  }
}

BadContentRepot.propTypes = {
  // https://www.npmjs.com/package/prop-types
  title: PropTypes.string,
}

BadContentRepot.defaultProps = {
  title: '举报内容',
}

export default BadContentRepot
