import React from 'react'
import PropTypes from 'prop-types'

import { prettyNum } from '@utils'
import { Wrapper, Title, Number } from './styles/num_section'

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
