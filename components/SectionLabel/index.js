/*
 *
 * SectionLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_ASSETS } from '../../config'

import {
  Wrapper,
  Label,
  Title,
  Desc,
  Divider,
  LabelIcon,
  AdderWrapper,
  AdderText,
  AdderIcon,
} from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:SectionLabel:index')
/* eslint-enable no-unused-vars */

const SectionLabel = ({ title, iconSrc, desc, node, withAdder, onAdd }) => (
  <Wrapper>
    <Label>
      <LabelIcon src={iconSrc} />
      <Title>{title}</Title>
      <AdderWrapper show={withAdder} onClick={onAdd}>
        <AdderIcon src={`${ICON_ASSETS}/cmd/add_circle.svg`} />
        <AdderText>添加</AdderText>
      </AdderWrapper>
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
  withAdder: PropTypes.bool,
  onAdd: PropTypes.func,
}

SectionLabel.defaultProps = {
  iconSrc: `${ICON_ASSETS}/cmd/setting_theme.svg`,
  desc: '',
  node: '',
  withAdder: false,
  onAdd: debug,
}

export default SectionLabel
