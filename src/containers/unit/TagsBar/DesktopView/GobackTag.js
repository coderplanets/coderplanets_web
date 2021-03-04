import React from 'react'

import { ICON } from '@/config'

import { Wrapper, TagIcon, TagTitle } from '../styles/desktop_view/goback_tag'
import { onTagSelect } from '../logic'

const GobackTag = ({ onSelect }) => {
  const emptytag = { id: '', title: '', color: '' }

  return (
    <Wrapper onClick={onTagSelect(emptytag, onSelect)}>
      <TagIcon src={`${ICON}/hash-solid.svg`} />
      <TagTitle>全部标签</TagTitle>
    </Wrapper>
  )
}

export default GobackTag
