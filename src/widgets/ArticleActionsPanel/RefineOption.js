import React from 'react'
import T from 'prop-types'
import { contains, pluck } from 'ramda'

import { ICON_CMD } from '@/config'
import { withGuardian } from '@/hoc'

import { Option, OptionIcon, OptionTitle } from './styles'

const RefineOption = ({ data, thread, onSetRefined, onUnsetRefined }) => (
  <>
    {contains('refined', pluck('title', data.tags)) ? (
      <Option onClick={() => onUnsetRefined(thread)}>
        <OptionIcon src={`${ICON_CMD}/diamond_frame.svg`} />
        <OptionTitle>取消精华</OptionTitle>
      </Option>
    ) : (
      <Option onClick={() => onSetRefined(thread)}>
        <OptionIcon src={`${ICON_CMD}/diamond_frame.svg`} />
        <OptionTitle>设为精华</OptionTitle>
      </Option>
    )}
  </>
)

RefineOption.propTypes = {
  data: T.shape({
    tags: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
      }),
    ),
  }).isRequired,
  thread: T.string.isRequired,
  onSetRefined: T.func.isRequired,
  onUnsetRefined: T.func.isRequired,
}

RefineOption.defaultProps = {}

export default withGuardian(RefineOption)
