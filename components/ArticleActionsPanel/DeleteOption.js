import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'
import withGuardian from '@components/HOC/withGuardian'

import { Option, OptionIcon, OptionTitle } from './styles'

const DeleteOption = ({ onDelete }) => (
  <React.Fragment>
    <Option red onClick={onDelete}>
      <OptionIcon src={`${ICON_CMD}/delete.svg`} red />
      <OptionTitle>删除该内容</OptionTitle>
    </Option>
  </React.Fragment>
)

DeleteOption.propTypes = {
  onDelete: PropTypes.func.isRequired,
}

DeleteOption.defaultProps = {}

export default withGuardian(DeleteOption)
