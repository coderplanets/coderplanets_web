/*
 *
 * SectionLabel
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import Maybe from '@components/Maybe'

import {
  Wrapper,
  Label,
  Title,
  Desc,
  Divider,
  LabelIcon,
  AddonWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:SectionLabel:index')

const SectionLabel = ({ title, iconSrc, desc, node, addonNode }) => (
  <Wrapper>
    <Label>
      <LabelIcon src={iconSrc} />
      <Title>{title}</Title>
      <AddonWrapper show={addonNode !== ''}>{addonNode}</AddonWrapper>
    </Label>
    <Divider />
    <Maybe test={desc}>
      <Desc>{desc}</Desc>
    </Maybe>
    <Maybe test={node}>
      <React.Fragment>{node}</React.Fragment>
    </Maybe>
  </Wrapper>
)

SectionLabel.propTypes = {
  // https://www.npmjs.com/package/prop-types
  title: T.string.isRequired,
  iconSrc: T.string,
  desc: T.string,
  node: T.oneOfType([T.string, T.node]),
  addonNode: T.oneOfType([T.string, T.node]),
}

SectionLabel.defaultProps = {
  iconSrc: `${ICON_CMD}/setting_theme.svg`,
  desc: '',
  node: '',
  addonNode: '',
}

export default SectionLabel
