import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from 'config'
import withGuardian from 'components/HOC/withGuardian'

import { Option, OptionIcon, OptionTitle } from './styles'

const CommunitySetterOption = ({ onCommunitySet }) => (
  <React.Fragment>
    <Option onClick={onCommunitySet}>
      <OptionIcon src={`${ICON_CMD}/mirror.svg`} />
      <OptionTitle>镜像社区</OptionTitle>
    </Option>
  </React.Fragment>
)

CommunitySetterOption.propTypes = {
  // thread: PropTypes.string.isRequired,
  onCommunitySet: PropTypes.func.isRequired,
}

CommunitySetterOption.defaultProps = {}

export default withGuardian(CommunitySetterOption)
