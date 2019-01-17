import React from 'react'

import { DEFAULT_USER_AVATAR } from '../../config'

// import { ICON_CMD } from '../../config'
import Modal from '../../components/Modal'
import { Wrapper, NoteIcon, NoteDesc, Linker } from './styles/publish_note'

import { onNoteClose } from './logic'

const PublishNote = ({ show }) => (
  <Modal show={show} showCloseBtn onClose={onNoteClose}>
    <Wrapper>
      <NoteIcon src={`${DEFAULT_USER_AVATAR}`} />
      <NoteDesc>
        首页（home社区）只展示各个社区的招聘信息, 请将您的招聘信息发布到
        <Linker href="/communities">对应的社区</Linker>。
      </NoteDesc>
    </Wrapper>
  </Modal>
)

export default PublishNote
