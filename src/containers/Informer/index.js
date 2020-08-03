/*
 *
 * Informer
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { connectStore, buildLog } from '@/utils'

import Modal from '@/components/Modal'
import Header from './Header'
import Overview from './Overview'
import Form from './Form'

import { Wrapper, Title, Icon } from './styles'
import { useInit, toggleModal } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Informer')

const InformerContainer = ({ informer: store, title, children }) => {
  useInit(store)

  const { showModal, curView, viewingData, type, message } = store

  return (
    <>
      <Modal width="500px" show={showModal} showCloseBtn onClose={toggleModal}>
        <>
          <Header data={viewingData} />
          {curView === 'form' ? (
            <Form type={type} message={message} />
          ) : (
            <Overview />
          )}
        </>
      </Modal>
      <>
        {children ? (
          <>{children}</>
        ) : (
          <Wrapper onClick={toggleModal}>
            <Icon src={`${ICON_CMD}/flag.svg`} />
            <Title>{title}</Title>
          </Wrapper>
        )}
      </>
    </>
  )
}

InformerContainer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  title: T.string,
  informer: T.any.isRequired,
  children: T.node,
}

InformerContainer.defaultProps = {
  title: '举报内容',
  children: null,
}

export default connectStore(InformerContainer)
