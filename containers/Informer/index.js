/*
 *
 * Informer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'
import { connectStore, makeDebugger } from '@utils'

import Modal from '@components/Modal'
import Header from './Header'
import Overview from './Overview'
import Form from './Form'

import { Wrapper, Title, Icon } from './styles'
import { useInit, toggleModal } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Informer')

const InformerContainer = ({ informer, title, children }) => {
  useInit(informer)

  const { showModal, curView, viewingData, type, message } = informer

  return (
    <React.Fragment>
      <Modal width="500px" show={showModal} showCloseBtn onClose={toggleModal}>
        <React.Fragment>
          <Header data={viewingData} />
          {curView === 'form' ? (
            <Form type={type} message={message} />
          ) : (
            <Overview />
          )}
        </React.Fragment>
      </Modal>
      <React.Fragment>
        {children ? (
          <React.Fragment>{children}</React.Fragment>
        ) : (
          <Wrapper onClick={toggleModal}>
            <Icon src={`${ICON_CMD}/flag.svg`} />
            <Title>{title}</Title>
          </Wrapper>
        )}
      </React.Fragment>
    </React.Fragment>
  )
}

InformerContainer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  title: PropTypes.string,
  informer: PropTypes.any.isRequired,
  children: PropTypes.node,
}

InformerContainer.defaultProps = {
  title: '举报内容',
  children: null,
}

export default connectStore(InformerContainer)
