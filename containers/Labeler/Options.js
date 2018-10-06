import React from 'react'
import R from 'ramda'
import TagList from './TagList'

import { ICON_CMD, LABEL_POOL } from '../../config'

import {
  OptionWrapper,
  OptionItem,
  OptionCheckIcon,
  OptionText,
} from './styles/options'

import { uid } from '../../utils'

const OptionItems = ({ items, selected, onOptionSelect }) => {
  return (
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
}

const renderOptions = (label, tagsData, selected, onOptionSelect) => {
  switch (label) {
    case 'default': {
      return <TagList data={tagsData} />
    }
    case 'city': {
      return <TagList data={tagsData} />
    }
    default: {
      return (
        <OptionItems
          items={LABEL_POOL[label].data}
          selected={selected}
          onOptionSelect={onOptionSelect}
        />
      )
    }
  }
}

const Options = ({ label, tagsData, selected, onOptionSelect }) => (
  <React.Fragment>
    {renderOptions(label, tagsData, selected, onOptionSelect)}
  </React.Fragment>
)

export default Options
