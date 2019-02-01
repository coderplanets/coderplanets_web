import React from 'react'

import Modal from 'components/Modal'

// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles/modal_preview'

const ModalPreview = ({ visible, children }) => (
  <Modal width="700px" show={visible} onClose={console.log}>
    <div>{children}</div>
  </Modal>
)

export default ModalPreview
