import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { withGuardian } from '@/hoc'

import { Option, OptionIcon, OptionTitle } from './styles'

const DeleteOption = ({ onDelete }) => (
  <>
    <Option red onClick={onDelete}>
      <OptionIcon src={`${ICON_CMD}/delete.svg`} red />
      <OptionTitle>删除该内容</OptionTitle>
    </Option>
  </>
)

DeleteOption.propTypes = {
  onDelete: T.func.isRequired,
}

DeleteOption.defaultProps = {}

export default withGuardian(DeleteOption)
