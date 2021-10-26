import { FC } from 'react'
import { components } from 'react-select'

import type { TSelectOption } from '@/spec'

import type { TSelectProps } from './spec'
import { BlinkCursor, OptionRow, OptionTitle, OptionDesc } from './styles'

export const IndicatorsContainer: FC = (props) => {
  return (
    <div style={{ background: 'transparent' }}>
      <components.IndicatorsContainer {...props} />
    </div>
  )
}

type TOption = {
  data: TSelectOption
  selectProps: TSelectProps
}

export const Option: FC<TOption> = (props) => {
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

type TInput = {
  data: TSelectOption
  selectProps: TSelectProps
}

export const Input: FC<TInput> = (props) => {
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
