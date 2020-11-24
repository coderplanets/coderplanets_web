import React from 'react'
import { components } from 'react-select'

import { BlinkCursor, OptionRow, OptionTitle, OptionDesc } from './styles'

export const IndicatorsContainer = (props) => {
  return (
    <div style={{ background: 'transparent' }}>
      <components.IndicatorsContainer {...props} />
    </div>
  )
}

export const Option = (props) => {
  const { data, selectProps } = props

  return (
    <components.Option {...props}>
      <OptionRow>
        <OptionTitle active={selectProps?.value?.value === data.value}>
          {data.label}
        </OptionTitle>
        {data.desc && <OptionDesc>{data.desc}</OptionDesc>}
      </OptionRow>
    </components.Option>
  )
}

export const Input = (props) => {
  const { selectProps } = props
  const { menuIsOpen } = selectProps

  if (!menuIsOpen) {
    return <components.Input {...props} />
  }

  return (
    <BlinkCursor>
      <components.Input {...props} />
    </BlinkCursor>
  )
}
