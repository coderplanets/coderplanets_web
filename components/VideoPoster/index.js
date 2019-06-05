/*
 *
 * VideoPoster
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'

import { makelogger } from '@utils'
import { Wrapper, PosterImage, PlayIcon } from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:VideoPoster:index')

const VideoPoster = ({ poster }) => (
  <Wrapper>
    <PlayIcon src={`${ICON_CMD}/player_play.svg`} />
    <PosterImage src={poster} />
  </Wrapper>
)

VideoPoster.propTypes = {
  poster: PropTypes.string.isRequired,
}

VideoPoster.defaultProps = {}

export default React.memo(VideoPoster)
