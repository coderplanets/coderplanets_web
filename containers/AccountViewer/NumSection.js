import React from 'react'
import T from 'prop-types'

import { prettyNum } from '@utils'
import { Wrapper, Title, Number } from './styles/num_section'

const NumSection = ({ title, num }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Number>{prettyNum(num)}</Number>
  </Wrapper>
)

NumSection.propTypes = {
  title: T.string.isRequired,
  num: T.number.isRequired,
}

NumSection.defaultProps = {}

export default NumSection
