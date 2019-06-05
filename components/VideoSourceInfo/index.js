/*
 *
 * VideoSourceInfo
 *
 */

import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'

import { makelogger } from '@utils'
import Maybe from '@components/Maybe'

import { Wrapper, LinkIcon, LogoIcon, Text } from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:VideoSourceInfo:index')

const recommandSources = ['youtube', 'vimeo', 'bilibili']
const colorMaps = {
  youtube: '#FF0008',
  vimeo: '#00B7E7',
  bilibili: '#F78199',
}

const VideoSourceInfo = ({ value }) => (
  <Wrapper>
    <Maybe test={!R.contains(value, recommandSources)}>
      <LinkIcon src={`${ICON_CMD}/link.svg`} />
    </Maybe>
    <Maybe test={R.contains(value, recommandSources)}>
      <LogoIcon src={`${ICON_CMD}/${value}.svg`} color={colorMaps[value]} />
    </Maybe>
    <Text>{value}</Text>
  </Wrapper>
)

VideoSourceInfo.propTypes = {
  value: PropTypes.string.isRequired,
}

VideoSourceInfo.defaultProps = {}

export default VideoSourceInfo
