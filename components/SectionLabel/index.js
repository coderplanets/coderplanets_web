/*
 *
 * SectionLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_ASSETS } from '../../config'

import { Wrapper, Label, Title, Desc, Divider, LabelIcon } from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:SectionLabel:index')
/* eslint-enable no-unused-vars */

// `${ICON_ASSETS}/cmd/setting_theme.svg`
const SectionLabel = ({ title, iconSrc, desc, node }) => (
  <Wrapper>
    <Label>
      <LabelIcon src={iconSrc} />
      <Title>{title}</Title>
    </Label>
    <Divider />
    {R.isEmpty(desc) ? null : <Desc>{desc}</Desc>}
    {R.isEmpty(node) ? null : <React.Fragment>{node}</React.Fragment>}
  </Wrapper>
)

SectionLabel.propTypes = {
  // https://www.npmjs.com/package/prop-types
  title: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  desc: PropTypes.string,
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

SectionLabel.defaultProps = {
  iconSrc: `${ICON_ASSETS}/cmd/setting_theme.svg`,
  desc: '',
  node: '',
}

export default SectionLabel
