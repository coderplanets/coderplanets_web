import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from 'config'
import withGuardian from 'components/HOC/withGuardian'

import { Option, OptionIcon, OptionTitle } from './styles'

const PinOption = ({ data, thread, onPin, onUndoPin }) => (
  <React.Fragment>
    {data.pin ? (
      <Option onClick={onUndoPin.bind(this, thread)}>
        <OptionIcon src={`${ICON_CMD}/pin.svg`} reverse />
        <OptionTitle>取消置顶</OptionTitle>
      </Option>
    ) : (
      <Option onClick={onPin.bind(this, thread)}>
        <OptionIcon src={`${ICON_CMD}/pin.svg`} />
        <OptionTitle>置顶显示</OptionTitle>
      </Option>
    )}
  </React.Fragment>
)

PinOption.propTypes = {
  data: PropTypes.shape({
    pin: PropTypes.bool,
    author: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  thread: PropTypes.string.isRequired,
  onPin: PropTypes.func.isRequired,
  onUndoPin: PropTypes.func.isRequired,
}

PinOption.defaultProps = {}

export default withGuardian(PinOption)
