/*
 *
 * Informer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'

import { Modal } from '../../components'
import { Wrapper, Title, Icon } from './styles'

import Header from './Header'
import Overview from './Overview'
import Form from './Form'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Informer')
/* eslint-enable no-unused-vars */

class InformerContainer extends React.Component {
  constructor(props) {
    super(props)

    const { informer } = props
    logic.init(informer)
  }

  componentWillUnmount() {
    logic.unInit()
  }

  render() {
    const { informer, title } = this.props
    const { showModal, curView, viewingData, type, message } = informer

    return (
      <React.Fragment>
        <Modal
          width="500px"
          show={showModal}
          showCloseBtn
          onClose={logic.toggleModal}
        >
          <React.Fragment>
            <Header data={viewingData} />
            {curView === 'form' ? (
              <Form type={type} message={message} />
            ) : (
              <Overview />
            )}
          </React.Fragment>
        </Modal>
        <Wrapper onClick={logic.toggleModal}>
          <Icon src={`${ICON_CMD}/flag.svg`} />
          <Title>{title}</Title>
        </Wrapper>
      </React.Fragment>
    )
  }
}

InformerContainer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  title: PropTypes.string,
  informer: PropTypes.any.isRequired,
}

InformerContainer.defaultProps = {
  title: '举报内容',
}

export default inject(storePlug('informer'))(observer(InformerContainer))
