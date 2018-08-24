import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Title, Number } from './styles/num_section'

import { prettyNum } from '../../utils'

const NumSection = ({ title, num }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Number>{prettyNum(num)}</Number>
  </Wrapper>
)

NumSection.propTypes = {
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
}

NumSection.defaultProps = {}

export default NumSection
