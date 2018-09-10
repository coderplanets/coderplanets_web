/*
 *
 * SectionLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import { Maybe } from '..'

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
        <AdderIcon src={`${ICON_CMD}/add_circle.svg`} />
        <AdderText>添加</AdderText>
      </AdderWrapper>
    </Label>
    <Divider />
    <Maybe data={desc}>
      <Desc>{desc}</Desc>
    </Maybe>
    <Maybe data={node}>
      <React.Fragment>{node}</React.Fragment>
    </Maybe>
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
  iconSrc: `${ICON_CMD}/setting_theme.svg`,
  desc: '',
  node: '',
  withAdder: false,
  onAdd: debug,
}

export default SectionLabel
