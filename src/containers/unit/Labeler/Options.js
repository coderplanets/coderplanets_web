import React from 'react'
import { contains } from 'ramda'

import { ICON_CMD, LABEL_POOL } from '@/config'
import { uid } from '@/utils'

import TagList from './TagList'

import {
  OptionWrapper,
  OptionItem,
  OptionCheckIcon,
  OptionText,
} from './styles/options'

const OptionItems = ({ items, selected, onOptionSelect }) => (
  <OptionWrapper>
    {items.map((item) => (
      <OptionItem key={uid.gen()}>
        <OptionCheckIcon
          src={`${ICON_CMD}/check.svg`}
          active={contains(item, selected)}
        />
        <OptionText onClick={() => onOptionSelect(item)}>{item}</OptionText>
      </OptionItem>
    ))}
  </OptionWrapper>
)

const renderOptions = (label, items, selected, onOptionSelect) => {
  switch (label) {
    case 'default':
    case 'city':
      return (
        <TagList
          items={items}
          selected={selected}
          onOptionSelect={onOptionSelect}
        />
      )

    default:
      return (
        <OptionItems
          items={LABEL_POOL[label].data}
          selected={selected}
          onOptionSelect={onOptionSelect}
        />
      )
  }
}

const Options = ({ label, items, selected, onOptionSelect }) => (
  <>{renderOptions(label, items, selected, onOptionSelect)}</>
)

export default React.memo(Options)
