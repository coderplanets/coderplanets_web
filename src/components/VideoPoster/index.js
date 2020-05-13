/*
 *
 * VideoPoster
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, PosterImage, PlayIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:VideoPoster:index')

const VideoPoster = ({ poster }) => (
  <Wrapper>
    <PlayIcon src={`${ICON_CMD}/player_play.svg`} />
    <PosterImage src={poster} />
  </Wrapper>
)

VideoPoster.propTypes = {
  poster: T.string.isRequired,
}

VideoPoster.defaultProps = {}

export default React.memo(VideoPoster)
