import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { withGuardian } from '@/hoc'

import { Option, OptionIcon, OptionTitle } from './styles'

const PinOption = ({ data, thread, onPin, onUndoPin }) => (
  <React.Fragment>
    {data.pin ? (
      <Option onClick={() => onUndoPin(thread)}>
        <OptionIcon src={`${ICON_CMD}/pin.svg`} reverse />
        <OptionTitle>取消置顶</OptionTitle>
      </Option>
    ) : (
      <Option onClick={() => onPin(thread)}>
        <OptionIcon src={`${ICON_CMD}/pin.svg`} />
        <OptionTitle>置顶显示</OptionTitle>
      </Option>
    )}
  </React.Fragment>
)

PinOption.propTypes = {
  data: T.shape({
    pin: T.bool,
    author: T.shape({
      id: T.string,
    }),
  }).isRequired,
  thread: T.string.isRequired,
  onPin: T.func.isRequired,
  onUndoPin: T.func.isRequired,
}

PinOption.defaultProps = {}

export default withGuardian(PinOption)
