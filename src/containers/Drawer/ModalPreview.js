import React from 'react'

import Modal from '@/components/Modal'

import { closeDrawer } from './logic'

const ModalPreview = ({ visible, children }) => (
  <Modal
    width="720px"
    show={visible}
    onClose={closeDrawer}
    background="preview"
    offsetTop="11%"
  >
    <div>{children}</div>
  </Modal>
)

export default React.memo(ModalPreview)
