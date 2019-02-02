import React from 'react'

import Modal from 'components/Modal'

import { closePreview } from './logic'

const ModalPreview = ({ visible, children }) => (
  <Modal
    width="720px"
    show={visible}
    onClose={closePreview}
    background="preview"
    offsetTop="11%"
  >
    <div>{children}</div>
  </Modal>
)

export default ModalPreview
