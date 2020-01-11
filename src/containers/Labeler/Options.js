import React from 'react'
import R from 'ramda'

import LABEL_POOL from '@config/label_pool'
import { ICON_CMD } from '@config'
import { uid } from '@utils'

import TagList from './TagList'

import {
  OptionWrapper,
  OptionItem,
  OptionCheckIcon,
  OptionText,
} from './styles/options'

const OptionItems = ({ items, selected, onOptionSelect }) => (
  <OptionWrapper>
    {items.map(item => (
      <OptionItem key={uid.gen()}>
        <OptionCheckIcon
          src={`${ICON_CMD}/check.svg`}
          active={R.contains(item, selected)}
        />
        <OptionText onClick={onOptionSelect.bind(this, item)}>
          {item}
        </OptionText>
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
  <React.Fragment>
    {renderOptions(label, items, selected, onOptionSelect)}
  </React.Fragment>
)

export default Options
