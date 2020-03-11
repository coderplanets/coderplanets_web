/*
 *
 * VideoSourceInfo
 *
 */

import React from 'react'
import R from 'ramda'
import T from 'prop-types'

import { ICON_CMD } from '@config'

import { buildLog } from '@utils'
import Maybe from '@components/Maybe'

import { Wrapper, LinkIcon, LogoIcon, Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:VideoSourceInfo:index')

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
  value: T.string.isRequired,
}

VideoSourceInfo.defaultProps = {}

export default React.memo(VideoSourceInfo)
