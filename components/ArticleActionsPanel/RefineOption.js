import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@config'
import withGuardian from '@components/HOC/withGuardian'

import { Option, OptionIcon, OptionTitle } from './styles'

const RefineOption = ({ data, thread, onSetRefined, onUnsetRefined }) => (
  <React.Fragment>
    {R.contains('refined', R.pluck('title', data.tags)) ? (
      <Option onClick={onUnsetRefined.bind(this, thread)}>
        <OptionIcon src={`${ICON_CMD}/diamond_frame.svg`} />
        <OptionTitle>取消精华</OptionTitle>
      </Option>
    ) : (
      <Option onClick={onSetRefined.bind(this, thread)}>
        <OptionIcon src={`${ICON_CMD}/diamond_frame.svg`} />
        <OptionTitle>设为精华</OptionTitle>
      </Option>
    )}
  </React.Fragment>
)

RefineOption.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      })
    ),
  }).isRequired,
  thread: PropTypes.string.isRequired,
  onSetRefined: PropTypes.func.isRequired,
  onUnsetRefined: PropTypes.func.isRequired,
}

RefineOption.defaultProps = {}

export default withGuardian(RefineOption)
