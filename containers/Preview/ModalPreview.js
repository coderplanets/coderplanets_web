import React from 'react'

import Modal from 'components/Modal'

import { closePreview } from './logic'

const ModalPreview = ({ visible, children }) => (
  <Modal width="700px" show={visible} onClose={closePreview}>
    <div>{children}</div>
  </Modal>
)

export default ModalPreview
