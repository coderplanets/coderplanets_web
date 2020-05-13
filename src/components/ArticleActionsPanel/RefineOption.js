import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@/config'
import { withGuardian } from '@/hoc'

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
  data: T.shape({
    tags: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
      })
    ),
  }).isRequired,
  thread: T.string.isRequired,
  onSetRefined: T.func.isRequired,
  onUnsetRefined: T.func.isRequired,
}

RefineOption.defaultProps = {}

export default withGuardian(RefineOption)
